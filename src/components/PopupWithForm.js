import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, {handleFormSubmit}) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._saveButton = this._popup.querySelector('.popup__save-button');
  }

  _getInputValues() {
    this._formsInputs = this._popup.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._formsInputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  close(){
    super.close();
    this._form.reset();
  }

  _isLoading(loading) {
    if(loading) {
      this._saveButton.textContent = 'Сохранение...'
    }
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt)=>{
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      setTimeout(() => {
        this.close();
      }, 3000);
    })
  }
}
