import Popup from './Popup.js';

export default class DeletionModal extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setEventListeners(){
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt)=>{

      evt.preventDefault();
      console.log('Запускаем Модалку Удаления')
      this.close();
    })
  }
}
