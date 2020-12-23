/* Отображаем ошибку */
function showError (form, input, config) {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
  inputError.classList.add(config.errorClass);
}

/* Прячем ошибку */
function hideError (form, input, config) {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = '';
  input.classList.remove(config.inputErrorClass);
  inputError.classList.remove(config.errorClass);
}

function setButtonState (button, isActive, config) {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  }
}

/* Проверяем валидность */
function checkValidity (form, input, config) {
  if(input.validity.valid) {
    hideError(form, input, config);
  } else {
    showError(form, input, config);
  }
}


function setEventListener(form, config) {
  const inputSelector = form.querySelectorAll(config.inputSelector);
  const submitButtonSelector = form.querySelector(config.submitButtonSelector);

  /* Валидация */
  inputSelector.forEach(input => {
    input.addEventListener('input', (evt)=>{
      checkValidity(form, input, config);
      setButtonState(submitButtonSelector, form.checkValidity(), config);
    })
  })

}

/* Запускаем процесс */
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach(form => {

    setEventListener(form, config);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const submitButtonSelector = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButtonSelector, form.checkValidity(), config);
  });
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__error_visible'
};

enableValidation(validationConfig);

