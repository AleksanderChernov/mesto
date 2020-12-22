/* Отображаем ошибку */
function showError (form, input) {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = input.validationMessage;
  input.classList.add('popup__input_type_error');
  inputError.classList.add('popup__error_visible');
}

/* Прячем ошибку */
function hideError (form, input) {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = '';
  input.classList.remove('popup__input_type_error');
  inputError.classList.remove('popup__error_visible');
}

function setButtonState (button, isActive) {
  if (isActive) {
    button.classList.remove('popup__save-button_disabled');
    button.disabled = false;
  } else {
    button.classList.add('popup__save-button_disabled');
    button.disabled = true;
  }
}

/* Проверяем валидность */
function checkValidity (form, input) {
  if(input.validity.valid) {
    hideError(form, input);
  } else {
    showError(form, input);
  }
}


function setEventListener(form) {
  const inputSelector = form.querySelectorAll('.popup__input');
  const submitButtonSelector = form.querySelector('.popup__save-button');

  /* Валидация */
  inputSelector.forEach(input => {
    input.addEventListener('input', (evt)=>{
      checkValidity(form, input);
      setButtonState(submitButtonSelector, form.checkValidity());
    })
  })

}

/* Запускаем процесс */
function enableValidation() {
  const formSelector = document.querySelectorAll('.popup__form');
  formSelector.forEach(form => {

    setEventListener(form);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const submitButtonSelector = form.querySelector('.popup__save-button');
    setButtonState(submitButtonSelector, form.checkValidity());
  });
}

enableValidation();
