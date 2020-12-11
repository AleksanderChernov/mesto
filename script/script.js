/* Выбираем форму */
const formElementProfile = document.querySelector('.popup__form');
const formElementPlaces = document.querySelector('.popup__form_places');

/* Переключение блоков */
const profilePopupOpenButton = document.querySelector('.profile__edit-button');
const profilePlacesOpenButton = document.querySelector('.profile__add-button');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');

/* Попап */
const profilePopup = document.querySelector('.popup');

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

/* Открыть форму профиля*/
function openProfilePopup() {

  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;

}

/* Открываем определенный попап */
function openPopup(node) {

  node.classList.add('popup_state_opened');

}

/* Закрыть форму */
function closePopup(node) {

  node.classList.remove('popup_state_opened');

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

/* Создаем информацию карты */
function createCard(cardData) {

  const clonedCard = template.content.cloneNode(true);
  const cardsTitle = clonedCard.querySelector('.cards__title');
  const cardsImage = clonedCard.querySelector('.cards__image');

  /* Ставим название и ссылку + alt*/
  cardsTitle.textContent = cardData.name;
  cardsImage.src = cardData.link;
  cardsImage.alt = cardData.name;

  /* Работа с лайком */
  clonedCard.querySelector('.cards__like-button').addEventListener('click', function(evt){
    evt.target.classList.toggle('cards__like-button_pressed');
  });

  /* Удаляем карточку */
  clonedCard.querySelector('.cards__delete-button').addEventListener('click', function(evt){
    evt.target.closest('.cards').remove();
  });

  /* Увеличиваем картинку */
  const modalImage = document.querySelector('.popup__modal-image');
  const modalName = document.querySelector('.popup__modal-name');

  cardsImage.addEventListener('click', function(){
    modalImage.src = cardsImage.src;
    modalName.textContent = cardsTitle.textContent;
    openPopup(imagePopup);
  });

  return clonedCard;

}

/* Работа с формой places*/
function handleAddCardFormSubmit (evt) {

  const cardData = {
    name: nameInputPlaces.value,
    link: urlInputPlaces.value,
  }

  evt.preventDefault();
  cardsContainer.prepend(createCard(cardData));
  formElementPlaces.reset();
  closePopup(cardPopup);
}

/* Отрисовываем стартовые */
function renderCards(cards, position) {

  const cardsRemouldered = cards.map(createCard);
  position.prepend(...cardsRemouldered);

}

renderCards(initialCards, cardsContainer);

/* Слушаем открыть-закрыть форму */
profilePopupOpenButton.addEventListener('click', openProfilePopup);
profilePlacesOpenButton.addEventListener('click', ()=> {
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
