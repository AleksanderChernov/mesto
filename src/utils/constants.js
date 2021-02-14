/* Выбираем форму */
export const formElementProfile = document.querySelector('.popup__form_profile');
export const formElementPlaces = document.querySelector('.popup__form_places');
export const formElementAvatar = document.querySelector('.popup__form_avatar');

/* Переключение блоков */
export const profilePopupOpenButton = document.querySelector('.profile__edit-button');
export const profilePlacesOpenButton = document.querySelector('.profile__add-button');
export const profileAvatarOpenButton = document.querySelector('.profile__avatar_edit-button');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');

/* Avatar */
export const profileAvatar = '.profile__avatar';

/* Профиль-Попап */
export const profilePopup = document.querySelector('.popup_profile');

/* Аватар-Попап */
export const avatarPopup = document.querySelector('.popup_avatar');

/* Places-Попап */
export const cardPopup = document.querySelector('.popup_places');

/* Картинка-Попап */
export const imagePopup = document.querySelector('.popup_images');

/* Поле аватара */
export const avatarInput = document.querySelector('.popup__input_entity_avatar-url');

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

export const options = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-20',

  headers: {
        authorization:'d54a52cd-17ec-46b8-88b8-d32012d30e47',
        'Content-Type': 'application/json; charset=UTF-8'
      },

  me: 'https://mesto.nomoreparties.co/v1/cohort-20/users/me'
}

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

