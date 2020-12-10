/* Выбираем форму */
const formElement = document.querySelector('.popup__form');
const formElementPlaces = document.querySelector('.popup__form_places');

/* Переключение блоков */
const openPopupProfile = document.querySelector('.profile__edit-button');
const openPopupPlaces = document.querySelector('.profile__add-button');
const closePopup = document.querySelectorAll('.popup__close-button');

/* Профиль-Попап */
const switchStateProfile = document.querySelector('.profile__wrapper');
const switchStatePopup = document.querySelectorAll('.popup');

/* Places-Попап */
let switchStatePopupPlaces = document.querySelector('.popup_places');

/* Картинка-Попап */
const switchStateModal = document.querySelector('.popup_images');

/* Кнопки Save */
const saveInfo = document.querySelectorAll('.popup__save-button');
const saveInfoPlaces = document.querySelector('.popup__save-button_place');

/* Поля формы */
const nameInput = document.querySelector('.popup__input_entity_name');
const jobInput = document.querySelector('.popup__input_entity_occupation');

/* Параметры в профиле */
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

/* Template */
const template = document.querySelector('.template');
const templateSlot = document.querySelector('.template-slot');

/* Поля формы редактирования карточек */
const nameInputPlaces = document.querySelector('.popup__input_entity_place').value;
const urlInputPlaces = document.querySelector('.popup__input_entity_url').value;

/* Открыть форму профиля*/
function openEditorial() {

  openPopup(switchStatePopup[0]);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;

}

/* Открываем определенный попап */
function openPopup(node) {

  node.classList.add('popup_state_opened');

}

/* Закрыть форму */
function closeEditorial(node) {

  node.classList.remove('popup_state_opened');

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
  closeEditorial(switchStatePopup[0]);
}

/* Работа с формой places*/
function handleAddCardFormSubmit (evt) {

  const cardData = {
    name: nameInputPlaces,
    link: urlInputPlaces,
  }

  evt.preventDefault();
  pushCard(cardData);
  formElementPlaces.reset();
  closeEditorial(switchStatePopupPlaces);
}

/* Создаем информацию карты */
function createCard(cardData) {

  let clonedCard = template.content.cloneNode(true);
  const cardsTitle = clonedCard.querySelector('.cards__title');
  const cardsImage = clonedCard.querySelector('.cards__image');

  /* Ставим название и ссылку + alt*/
  cardsTitle.textContent = cardData.name;
  cardsImage.src = cardData.link;
  cardsImage.alt = cardsTitle.textContent;

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
    openPopup(switchStateModal);
  });

  templateSlot.prepend(clonedCard);
  return clonedCard
}

/* Рендер карточек в places */
function pushCard(cardData) {
  createCard(cardData);
}

/* Отрисовываем стартовые */
function renderCards() {
  initialCards.map(pushCard);
}
renderCards();

/* Слушаем открыть-закрыть форму */
openPopupProfile.addEventListener('click', openEditorial);
openPopupPlaces.addEventListener('click', ()=> {
  openPopup(switchStatePopupPlaces);
});

for (let i = 0 ; i < closePopup.length; i++) {
  closePopup[i].addEventListener('click', ()=>{
    switchStatePopup.forEach(closeEditorial);
  })
};

/* Слушаем сохранение информации */
formElement.addEventListener('submit', formSubmitHandler);
formElementPlaces.addEventListener('submit', handleAddCardFormSubmit);

