export default class Validation {
  constructor(config, incomingForm) {
    this._form = incomingForm;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._inputSelector = this._form.querySelectorAll(this._inputSelector);
  }

  _showError (input) {
    const inputError = this._form.querySelector(`#${input.id}-error`);
    inputError.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
    inputError.classList.add(this._errorClass);
  }

  /* Прячем ошибку */
  _hideError (input) {
    const inputError = this._form.querySelector(`#${input.id}-error`);
    inputError.textContent = '';
    input.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._errorClass);
  }

  clearValidation() {
    this._inputSelector.forEach(field => {
      this._hideError(field);
    })
  }

  highlightErrors() {
    this._inputSelector.forEach(field => {
      this._showError(field);
    })
  }

  setButtonState (isActive) {
    if (isActive) {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }

  /* Проверяем валидность */
  _checkValidity (input) {
    if(input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  _setEventListener() {

    this._inputSelector.forEach(input => {
      input.addEventListener('input', (evt)=>{
        this._checkValidity(input);
        this.setButtonState(this._form.checkValidity());
      })
    })
  }

  enableValidation() {

    this._setEventListener();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this.setButtonState(this._form.checkValidity());
  }
}

export {Validation}
