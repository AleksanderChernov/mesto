/* Выбираем форму */
export const formElementProfile = document.querySelector('.popup__form_profile');
export const formElementPlaces = document.querySelector('.popup__form_places');

/* Переключение блоков */
export const profilePopupOpenButton = document.querySelector('.profile__edit-button');
export const profilePlacesOpenButton = document.querySelector('.profile__add-button');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');

/* Профиль-Попап */
export const profilePopup = document.querySelector('.popup_profile');

/* Places-Попап */
export const cardPopup = document.querySelector('.popup_places');

/* Картинка-Попап */
export const imagePopup = document.querySelector('.popup_images');

/* Поля формы */
export const nameInput = document.querySelector('.popup__input_entity_name');
export const jobInput = document.querySelector('.popup__input_entity_occupation');

/* Параметры в профиле */
export const profileName = document.querySelector('.profile__name');
export const profileOccupation = document.querySelector('.profile__occupation');

/* Template */
export const template = document.querySelector('.template');
export const cardsContainer = document.querySelector('.template-slot');

/* Поля формы редактирования карточек */
export const nameInputPlaces = document.querySelector('.popup__input_entity_place');
export const urlInputPlaces = document.querySelector('.popup__input_entity_url');

/* Кнопка сохранения в форме для изображений */
export const placesSaveButton = formElementPlaces.querySelector('.popup__save-button');

/* Save */
export const saveButton = document.querySelector('.popup__save-button');

/* Секция для карточек */
export const section = '.places';


export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__error_visible'
};

/* Стартовые карточки */
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


