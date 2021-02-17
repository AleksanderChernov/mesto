import Popup from './Popup.js';

export default class DeletionModal extends Popup {
  constructor(popupSelector, deletionCallback) {
    super(popupSelector);
    this._delete = deletionCallback;
  }

  setEventListeners(){
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt)=>{
      evt.preventDefault();
      this._delete;
      this.close();
    })
  }
}
