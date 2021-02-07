import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup){
    super(popup);
    this._image = this._popup.querySelector('.popup__modal-image');
    this._title = this._popup.querySelector('.popup__modal-name');
  }
  open(item) {
    super.open();
    this._image.src = item.link;
    this._title.textContent = item.name;
    this._image.alt = item.name;
  }
}
