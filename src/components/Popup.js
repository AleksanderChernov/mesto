export default class Popup {
  constructor(popupSelector){
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add('popup_state_opened');
  }

  close() {
    this._popup.classList.remove('popup_state_opened');
    this._popup.removeEventListener('keydown', (evt)=>{this._handleEscClose(evt)});
    this._popup.removeEventListener('click', (evt)=>{this._overlayClose(evt)});
    this._popup.querySelector('.popup__close-button').removeEventListener('click', ()=>{this.close()});
  }

  _overlayClose (evt) {
    const clickedElem = evt.target;
    if (!clickedElem.classList.contains('popup_state_opened')) {
      return
    } else {
      clickedElem.closest('.popup').classList.remove('popup_state_opened');
    }
  }

  _handleEscClose (evt) {
    if (evt.key === 'Escape') {
      console.log(evt.target);
      this.close();
    }
  }

  setEventListeners(){
    this._popup.addEventListener('click', (evt)=>{this._overlayClose(evt)});
    this._popup.querySelector('.popup__close-button').addEventListener('click', ()=>{this.close()});
    document.addEventListener('keydown', (evt)=>{this._handleEscClose(evt)});
  }
}
