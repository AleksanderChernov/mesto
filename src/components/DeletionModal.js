import Popup from './Popup.js';

export default class DeletionModal extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__confirm-delete');
  }

  close() {
    super.close();
    this._confirmButton.removeEventListener('click', this._handleConfirmation)
  }

  setEventListeners(deletion){
    super.setEventListeners();
    this._handleConfirmation = deletion;
    this._confirmButton.addEventListener('click',(e)=>{
      e.preventDefault();
      this._handleConfirmation();
      setTimeout(() => {
        this.close(e);
      }, 300);
    })
  }
}
