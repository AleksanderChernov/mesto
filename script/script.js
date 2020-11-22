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
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__occupation');

/* Параметры в профиле */
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


/* Обновляет имена в форме от имени в профиле */

function refreshNames() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
}

/* Открыть форму */
function openEditorial() {

  switchStatePopup.classList.add('popup_state_opened');
  switchStateProfile.classList.remove('popup_state_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;

  refreshNames();
}

/* Закрыть форму */
function closeEditorial() {

  switchStatePopup.classList.remove('popup_state_opened');
  switchStateProfile.classList.add('popup_state_opened');

  refreshNames();
}

/* Сохраняем */
function formSubmitHandler (evt) {
  evt.preventDefault();

  saveInfo.addEventListener('click', function() {

    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;

    closeEditorial();
  })
}

/* Слушаем открыть-закрыть форму */
openPopup.addEventListener('click', openEditorial);
closePopup.addEventListener('click', closeEditorial);

/* Слушаем сохранение информации */
formElement.addEventListener('submit', formSubmitHandler);





