import '../src/pages/index.css';

import {Card} from './components/Card.js';
import FormValidator from './components/FormValidator.js';
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

/* Работаем с профилем */
const userInfoObject = new UserInfo({nameSelector: profileName, occupationSelector: profileOccupation, avatarSelector: avatarScr});

/* Вызов API */
const apiCall = new Api(options);

function renderMainPage() {
  apiCall.getInitialCards()
  .then(cards => {cardList.renderItems(cards)}
  )
  .catch((err) => {
    console.log(err);
  });
}
renderMainPage();

let userId = null;

/* Обновим инфу */
function renewInfo() {
  apiCall.getMyProfileInfo()
  .then(info => {
    userId = info._id;
    userInfoObject.setUserInfo({newName: info.name, newJob: info.about, newAvatar: info.avatar})}
  )
  .catch((err) => {
    console.log(err);
  });
}
renewInfo();

/* Работаем с аватаркой */
const avatarForm = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (info) => {
    apiCall.changeAvatar(info.avatar)
    .then(res=>{userInfoObject.setUserInfo({newName: res.name, newJob: res.about, newAvatar: res.avatar})})
    .then(avatarForm._isLoading(true))
    .then(renewInfo())
    .catch((err) => {
      console.log(err);
    });}
  },
  profileAvatar);
avatarForm.setEventListeners();

/* Секция для карточек + стартовые */
const cardList = new Section({
  renderer: (item) => {cardList.addItem(recreateNewCard(item))},
  },
section);

/* Коллбек удаления */
const removeCard = (card) => {
  return () => {
    console.log(card)
    apiCall.deleteCard(card)
  }
}

/* Создание карт */
function recreateNewCard(item) {
  const card = new Card(item, userId, template, apiCall,
    ()=>{
      modalImagePopup.open(item)
    },
    ()=>{
      modalDeleteCard.setEventListeners(removeCard(card.returnCardID()));
      modalDeleteCard.open()
    });
  const cardElement = card.generateCard();
  return cardElement;
}

/* Создаем новые карточки */
const placesForm = new PopupWithForm(cardPopup, {
  handleFormSubmit: (item) => {
    apiCall.addMyCard(item)
    .then(answer=>{cardList.prependItem(recreateNewCard(answer))})
    .then(placesForm._isLoading(true))
    .catch((err) => {
    console.log(err);
  });
  },
},
  section);

placesForm.setEventListeners();

/* Работаем с профилем */
const profileForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (inputValues) => {
    apiCall.updateUserInfo({
      name: inputValues.nameInput,
      about: inputValues.jobInput
    })
    .then(res=>{userInfoObject.setUserInfo({newName: res.name, newJob: res.about, newAvatar: res.avatar})})
    .then(profileForm._isLoading(true))
    .catch((err) => {
    console.log(err);
  });
  }
})
profileForm.setEventListeners();

/* Валидируем профиль */
const profileChecker = new FormValidator(config, formElementProfile);
profileChecker.enableValidation();

/* Валидируем карточки */
const placesChecker = new FormValidator(config, formElementPlaces);
placesChecker.enableValidation();

/* Валадируем аватар */
const avatarChecker = new FormValidator(config, formElementAvatar);
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
  placesChecker.clearValidation();
  placesForm.open();
});

/* Открываем форму аватарки */
profileAvatarOpenButton.addEventListener('click', ()=>{
  avatarChecker.setButtonState(false);
  avatarChecker.clearValidation();
  avatarForm.open();
});

