import '../src/pages/index.css';

import {Card} from '../src/components/card.js';
import Validation from '../src/components/validation.js';
import Section from '../src/components/Section.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import UserInfo from '../src/components/UserInfo.js'

import {initialCards, config, formElementProfile, formElementPlaces, profilePopupOpenButton, profilePlacesOpenButton,
profilePopup, cardPopup, imagePopup, nameInput, jobInput, profileName, profileOccupation, template, section} from '../src/utils/constants.js';

const modalImagePopup = new PopupWithImage(imagePopup);
modalImagePopup.setEventListeners();

function recreateNewCard (item){
  const card = new Card(item, template, ()=>{
    modalImagePopup.open(item);
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

/* Секция для карточек + стартовые */
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {recreateNewCard(item)},
  },
section);

cardList.renderItems();

/* Работаем с профилем */
const userInfoObject = new UserInfo({nameSelector: profileName, occupationSelector: profileOccupation});

const profileForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (inputValues) => {
    userInfoObject.setUserInfo({
      newName: inputValues.nameInput,
      newJob: inputValues.jobInput
    })
  }
})
profileForm.setEventListeners();

/* Создаем новые карточки */
const placesForm = new PopupWithForm(cardPopup, {
  handleFormSubmit: (item) => {recreateNewCard (item)},
  },
  section);
placesForm.setEventListeners();

/* Валидируем профиль */
const profileChecker = new Validation(config, formElementProfile);
profileChecker.enableValidation();

/* Валидируем карточки */
const placesChecker = new Validation(config, formElementPlaces);
placesChecker.enableValidation();

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
