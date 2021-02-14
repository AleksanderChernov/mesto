import '../src/pages/index.css';

import {Card} from '../src/components/card.js';
import Validation from '../src/components/validation.js';
import Section from '../src/components/Section.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import UserInfo from '../src/components/UserInfo.js';
import Api from '../src/components/Api.js';

import {initialCards, config, options, formElementProfile, formElementPlaces, profilePopupOpenButton, profilePlacesOpenButton,
profilePopup, profileAvatarOpenButton, cardPopup, imagePopup, nameInput, jobInput, profileName, profileOccupation, template, section, formElementAvatar, avatarPopup, profileAvatar} from '../src/utils/constants.js';

const modalImagePopup = new PopupWithImage(imagePopup);
modalImagePopup.setEventListeners();

/* Работаем с профилем */
const userInfoObject = new UserInfo({nameSelector: profileName, occupationSelector: profileOccupation});

/* Вызов API */
const apiCall = new Api(options);
apiCall.getMyProfileInfo()
.then(info => userInfoObject.setUserInfo({newName: info.name, newJob: info.about}))

/* Секция для карточек + стартовые */
const cardList = new Section({
  renderer: (item) => {recreateNewCard(item)},
  },
section);

/* Создание карт */
function recreateNewCard (item){
  const card = new Card(item, template, ()=>{
    modalImagePopup.open(item);
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

apiCall.getInitialCards()
.then(cards => {cardList.renderItems(cards)})

/* Работаем с профилем */
const profileForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (inputValues) => {
    userInfoObject.setUserInfo({
      newName: inputValues.nameInput,
      newJob: inputValues.jobInput
    })
    userInfoObject.updateUserInfo();
  }
})
profileForm.setEventListeners();

/* Работаем с аватаркой */
const avatarForm = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (item) => {recreateNewCard (item)},
  },
  profileAvatar);
avatarForm.setEventListeners();

/* Создаем новые карточки */
const placesForm = new PopupWithForm(cardPopup, {
  handleFormSubmit: (item) => {
    recreateNewCard(item),
    apiCall.addMyCard(item),
    console.log(item)},
  },
  section);

placesForm.setEventListeners();

  /* apiCall.addMyCard(cardElement)
  .then(element=>{cardList.renderItems(element)}) */


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

