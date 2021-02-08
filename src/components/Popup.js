export default class Popup {
  constructor(popupSelector){
    this._popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._overlayClose = this._overlayClose.bind(this);
    this._close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add('popup_state_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_state_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _overlayClose (e) {
    const clickedElem = e.target;
    if (!clickedElem.classList.contains('popup_state_opened')) {
      return
    } else {
      clickedElem.closest('.popup').classList.remove('popup_state_opened');
    }
  }

  _handleEscClose (e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners(){
    this._popup.addEventListener('click', this._overlayClose);
    this._popup.querySelector('.popup__close-button').addEventListener('click', this._close);
  }
}
