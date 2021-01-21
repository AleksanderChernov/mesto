class Validation {
  constructor(config, incomingForm) {
    this._formSelector = incomingForm;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  showError (form, input) {
    const inputError = form.querySelector(`#${input.id}-error`);
    inputError.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
    inputError.classList.add(this._errorClass);
  }

  /* Прячем ошибку */
  hideError (form, input) {
    const inputError = form.querySelector(`#${input.id}-error`);
    inputError.textContent = '';
    input.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._errorClass);
  }

  setButtonState (button, isActive) {
    if (isActive) {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
  }

  /* Проверяем валидность */
  checkValidity (form, input) {
    if(input.validity.valid) {
      this.hideError(form, input);
    } else {
      this.showError(form, input);
    }
  }

  _setEventListener(form) {
    const inputSelector = form.querySelectorAll(this._inputSelector);
    const submitButtonSelector = form.querySelector(this._submitButtonSelector);

    inputSelector.forEach(input => {
      input.addEventListener('input', (evt)=>{
        this.checkValidity(form, input);
        this.setButtonState(submitButtonSelector, form.checkValidity());
      })
    })
  }

  enableValidation() {
    /* const forms = document.querySelectorAll(config.formSelector); */

    this._setEventListener(this._formSelector);

    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const submitButtonSelector = this._formSelector.querySelector(this._submitButtonSelector);
    this.setButtonState(submitButtonSelector, this._formSelector.checkValidity());
  }
}

export {Validation}
