import '../src/pages/index.css';

import {Card} from '../src/components/card.js';
import Validation from '../src/components/validation.js';
import Section from '../src/components/Section.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import UserInfo from '../src/components/UserInfo.js';
import DeletionModal from '../src/components/DeletionModal.js';
import Api from '../src/components/Api.js';

import {initialCards, config, options, formElementProfile, formElementPlaces, profilePopupOpenButton, profilePlacesOpenButton,
profilePopup, profileAvatarOpenButton, cardPopup, imagePopup, nameInput, jobInput, profileName, profileOccupation, template, section, formElementAvatar, avatarPopup, profileAvatar, avatarInput, avatarScr, formDeleteCard, deletionPopup} from '../src/utils/constants.js';

const modalImagePopup = new PopupWithImage(imagePopup);
modalImagePopup.setEventListeners();

const modalDeleteCard = new DeletionModal(deletionPopup);
modalDeleteCard.setEventListeners();

/* Работаем с профилем */
const userInfoObject = new UserInfo({nameSelector: profileName, occupationSelector: profileOccupation, avatarSelector: avatarScr});

/* Вызов API */
const apiCall = new Api(options);

let userId = null;

/* Обновим инфу */
function renewInfo() {
  apiCall.getMyProfileInfo()
  .then(info => {
    userId = info._id;
    userInfoObject.setUserInfo({newName: info.name, newJob: info.about, newAvatar: info.avatar})}
  )
}
renewInfo();

apiCall.getMyProfileInfo()
.then(info => console.log(info))

apiCall.getInitialCards()
.then(cards => {cardList.renderItems(cards)})

/* Работаем с аватаркой */
const avatarForm = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (info) => {
    apiCall.changeAvatar(info.avatar)
    .then((info)=>{userInfoObject.setUserInfo({newAvatar: info.avatar})})
    .then(renewInfo())}
  },
  profileAvatar);
avatarForm.setEventListeners();

/* Секция для карточек + стартовые */
const cardList = new Section({
  renderer: (item) => {recreateNewCard(item)},
  },
section);

/* Создание карт */
function recreateNewCard(item) {
  const card = new Card(item, userId, template, apiCall, deletionPopup, ()=>{
    modalImagePopup.open(item)}, ()=>{modalDeleteCard.open()});
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

/* Работаем с профилем */
const profileForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (inputValues) => {
    userInfoObject.setUserInfo({
      newName: inputValues.nameInput,
      newJob: inputValues.jobInput,
      newAvatar: avatarScr.src
    })
    userInfoObject.updateUserInfo();
  }
})
profileForm.setEventListeners();

/* Создаем новые карточки */
const placesForm = new PopupWithForm(cardPopup, {
  handleFormSubmit: (item) => {
    recreateNewCard(item),
    apiCall.addMyCard(item),
    console.log(item)},
  },
  section);

placesForm.setEventListeners();

/* Валидируем профиль */
const profileChecker = new Validation(config, formElementProfile);
profileChecker.enableValidation();

/* Валидируем карточки */
const placesChecker = new Validation(config, formElementPlaces);
placesChecker.enableValidation();

/* Валадируем аватар */
const avatarChecker = new Validation(config, formElementAvatar);
avatarChecker.enableValidation();

/* Открываем форму профиля */
profilePopupOpenButton.addEventListener('click', ()=>{
  profileChecker.setButtonState(false);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
  profileChecker.clearValidation();
  profileChecker.setButtonState(true);
  profileForm.open();
});

/* Открываем форму картинок */
profilePlacesOpenButton.addEventListener('click', ()=> {
  placesChecker.setButtonState(false);
  placesForm.open();
});

profileAvatarOpenButton.addEventListener('click', ()=>{
  avatarChecker.setButtonState(false);
  avatarForm.open();
});

