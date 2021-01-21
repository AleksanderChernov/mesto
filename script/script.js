import {Card} from './card.js';
import Validation from './validation.js';
import {initialCards} from './initial-cards.js';

/* Выбираем форму */
const formElementProfile = document.querySelector('.popup__form_profile');
const formElementPlaces = document.querySelector('.popup__form_places');

/* Переключение блоков */
const profilePopupOpenButton = document.querySelector('.profile__edit-button');
const profilePlacesOpenButton = document.querySelector('.profile__add-button');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');

/* Профиль-Попап */
const profilePopup = document.querySelector('.popup_profile');

/* Places-Попап */
const cardPopup = document.querySelector('.popup_places');

/* Картинка-Попап */
const imagePopup = document.querySelector('.popup_images');

/* Поля формы */
const nameInput = document.querySelector('.popup__input_entity_name');
const jobInput = document.querySelector('.popup__input_entity_occupation');

/* Параметры в профиле */
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

/* Template */
const template = document.querySelector('.template');
const cardsContainer = document.querySelector('.template-slot');

/* Поля формы редактирования карточек */
const nameInputPlaces = document.querySelector('.popup__input_entity_place');
const urlInputPlaces = document.querySelector('.popup__input_entity_url');

/* Кнопка сохранения в форме для изображений */
const placesSaveButton = formElementPlaces.querySelector('.popup__save-button');

/* Save */
const saveButton = document.querySelector('.popup__save-button');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__error_visible'
};

/* Валидируем профиль */
const profileChecker = new Validation(config, formElementProfile);
profileChecker.enableValidation();

/* Валидируем карточки */
const placesChecker = new Validation(config, formElementPlaces);
placesChecker.enableValidation();

/* Попап картинки */
function imagePopupOpen(src, name) {
  const modalImage = document.querySelector('.popup__modal-image');
  const modalName = document.querySelector('.popup__modal-name');

  modalImage.src = src;
  modalName.textContent = name;
  modalImage.alt = name;
  openPopup(imagePopup);
}

initialCards.forEach((item) => {
	const card = new Card(item, template, imagePopupOpen);
  const cardElement = card.generateCard();
	cardsContainer.append(cardElement);
});

/* Открыть форму профиля*/
function openProfilePopup() {

  profileChecker.setButtonState(false);

  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;

  profileChecker.clearValidation();

  profileChecker.setButtonState(true);

}

/* Открываем определенный попап */
function openPopup(node) {

  node.classList.add('popup_state_opened');
  document.addEventListener('keydown', escClose);
  document.addEventListener('click', overlayClose);

}

/* Закрыть форму */
function closePopup(node) {
  node.classList.remove('popup_state_opened');
  document.removeEventListener('keydown', escClose);
  document.removeEventListener('click', overlayClose);

}

/* Вынесли функцию из сохранения */
function changeProfile() {
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
}

/* Сохраняем профиль*/
function handleProfileSubmit (evt) {
  evt.preventDefault();
  changeProfile();
  closePopup(profilePopup);
}

/* Работа с формой places*/
function handleAddCardFormSubmit (evt) {

  const cardData = {
    name: nameInputPlaces.value,
    link: urlInputPlaces.value,
  }

  evt.preventDefault();

  const card = new Card(cardData, template, imagePopupOpen);
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);
  closePopup(cardPopup);
  formElementPlaces.reset();
  placesChecker.setButtonState(false);
}

/* Закрываем на esc */
function escClose (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_state_opened');
    closePopup(openedPopup);
  }
}

/* Закрываем по клику на оверлей */
function overlayClose (evt) {
  const clickedElem = evt.target;
  if (!clickedElem.classList.contains('popup_state_opened')) {
    return
  } else {
    clickedElem.closest('.popup').classList.remove('popup_state_opened');
  }
}

/* Слушаем открыть-закрыть форму */
profilePopupOpenButton.addEventListener('click', openProfilePopup);

profilePlacesOpenButton.addEventListener('click', ()=> {

  placesChecker.highlightErrors();

  openPopup(cardPopup);

});

popupCloseButtons.forEach((item)=>{
  item.addEventListener('click', (evt)=>{
    const parentPopup = evt.target.closest('.popup');
    closePopup(parentPopup);
  })
});

/* Слушаем сохранение информации */
formElementProfile.addEventListener('submit', handleProfileSubmit);
formElementPlaces.addEventListener('submit', handleAddCardFormSubmit);
