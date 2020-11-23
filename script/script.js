/* Выбираем форму */
let formElement = document.querySelector('.popup__form');

/* Переключение блоков */
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');

/* Профиль-Попап */
let switchStateProfile = document.querySelector('.profile__wrapper');
let switchStatePopup = document.querySelector('.popup');

/* Кнопка Save */
let saveInfo = document.querySelector('.popup__save-button');

/* Поля формы */
let nameInput = document.querySelector('.popup_input_entity_name');
let jobInput = document.querySelector('.popup_input_entity_occupation');

/* Параметры в профиле */
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

/* Открыть форму */
function openEditorial() {

  switchStatePopup.classList.add('popup_state_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;

}

/* Закрыть форму */
function closeEditorial() {
  switchStatePopup.classList.remove('popup_state_opened');
}

/* Вынесли функцию из сохранения */
function changeProfile() {
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
}

/* Сохраняем */
function formSubmitHandler (evt) {
  evt.preventDefault();
  changeProfile();
  closeEditorial();
}

/* Слушаем открыть-закрыть форму */
openPopup.addEventListener('click', openEditorial);
closePopup.addEventListener('click', closeEditorial);

/* Слушаем сохранение информации */
formElement.addEventListener('submit', formSubmitHandler);
