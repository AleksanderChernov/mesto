/* Выбираем форму */
let formElement = document.querySelector('.popup__form');
let formElementPlaces = document.querySelector('.popup__form_places');

/* Переключение блоков */
let openPopup = document.querySelector('.profile__edit-button');
let openPopupPlaces = document.querySelector('.profile__add-button');
let closePopup = document.querySelectorAll('.popup__close-button');

/* Профиль-Попап */
let switchStateProfile = document.querySelector('.profile__wrapper');
let switchStatePopup = document.querySelector('.popup');

/* Places-Попап */
let switchStatePopupPlaces = document.querySelector('.popup_places');

/* Картинка-Попап */
let switchStateModal = document.querySelector('.popup_images');

/* Кнопки Save */
let saveInfo = document.querySelectorAll('.popup__save-button');
let saveInfoPlaces = document.querySelector('.popup__save-button_place');

/* Поля формы */
let nameInput = document.querySelector('.popup__input_entity_name');
let jobInput = document.querySelector('.popup__input_entity_occupation');

/* Параметры в профиле */
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

/* Template */
let template = document.querySelector('.template');
let templateSlot = document.querySelector('.template-slot');

/* Открыть форму профиля*/
function openEditorial() {

  switchStatePopup.classList.add('popup_state_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;

}

/* Открываем форму работы с изображениями */
function openEditorialPlaces() {

  switchStatePopupPlaces.classList.add('popup_state_opened');

}

/* Открыть модальное окно */
function openModal () {

  switchStateModal.classList.add('popup_state_opened');

}

/* Закрыть форму */
function closeEditorial() {

  switchStatePopupPlaces.classList.remove('popup_state_opened');
  switchStatePopup.classList.remove('popup_state_opened');
  switchStateModal.classList.remove('popup_state_opened');

}

/* Вынесли функцию из сохранения */
function changeProfile() {
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
}

/* Сохраняем профиль*/
function formSubmitHandler (evt) {
  evt.preventDefault();
  changeProfile();
  closeEditorial();
}

/* Стартовые карточки */
const initialCards = [
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

/* Храним собственные */
let myCards = [];

/* Отрисовываем стартовые */
function populatePlaces() {
  initialCards.map(pushCard);
}
populatePlaces();

/* Работа с формой places*/
function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();
  workingWithForm();
  closeEditorial();
}

/* Выносим функционал*/
function workingWithForm () {

  /* Поля формы редактирования карточек */
  let nameInputPlaces = document.querySelector('.popup__input_entity_place').value;
  let urlInputPlaces = document.querySelector('.popup__input_entity_url').value;

  myCards.name = nameInputPlaces;
  myCards.link = urlInputPlaces;

  pushCard(myCards);

}

/* Рендер карточек в places */
function pushCard(card) {
  let clonedCard = template.content.cloneNode(true);

  const cardsTitle = clonedCard.querySelector('.cards__title');
  const cardsImage = clonedCard.querySelector('.cards__image');

  /* Ставим название и ссылку + alt*/
  cardsTitle.textContent = card.name;
  cardsImage.src = card.link;
  cardsImage.alt = cardsTitle.textContent;

  /* Работа с лайком */
  clonedCard.querySelector('.cards__like-button').addEventListener('click', function(evt){
    evt.target.classList.toggle('cards__like-button_pressed');
  });

  /* Удаляем карточку */
  clonedCard.querySelector('.cards__delete-button').addEventListener('click', function(evt){
    evt.target.closest('.cards').remove();
  })

  /* Увеличиваем картинку */
  const modalImage = document.querySelector('.popup__modal-image');
  const modalName = document.querySelector('.popup__modal-name');

  cardsImage.addEventListener('click', function(){
    modalImage.src = cardsImage.src;
    modalName.textContent = cardsTitle.textContent;
    openModal()
  });

  templateSlot.prepend(clonedCard);

  return clonedCard;
}


/* Закрываем формы */
for (let i = 0 ; i < closePopup.length; i++) {
  closePopup[i].addEventListener('click', closeEditorial) ;
}

/* Слушаем открыть-закрыть форму */
openPopup.addEventListener('click', openEditorial);
openPopupPlaces.addEventListener('click', openEditorialPlaces);


/* Слушаем сохранение информации */
formElement.addEventListener('submit', formSubmitHandler);
formElementPlaces.addEventListener('submit', formSubmitHandlerPlaces);

