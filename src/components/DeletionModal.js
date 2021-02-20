import Popup from './Popup.js';

export default class DeletionModal extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__confirm-delete');
  }

  open(deletion) {
    super.open()
    this._handleConfirmation = deletion;
  }

  setEventListeners(){
    super.setEventListeners();
    this._confirmButton.addEventListener('click',(e)=>{
      e.preventDefault();
      this._handleConfirmation();
      setTimeout(() => {
        this.close(e);
      }, 300);
    })
  }
}
