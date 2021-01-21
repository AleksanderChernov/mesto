class Card {
  constructor (data, template, imagePopupOpen) {

    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._showPopup = imagePopupOpen;

  }

  _getTemplate() {
    const cardTemplate = document.querySelector('.template').content.querySelector('.cards').cloneNode('true');
    return cardTemplate;
  }

  _like(e) {
    e.target.classList.toggle('cards__like-button_pressed');
  }

  _delete(e) {
    e.target.closest('.cards').remove();
  }

  _setEventListeners() {

    /* Вешаем листенер на увеличение картинки*/
    this._element.querySelector('.cards__image').addEventListener('click', ()=>{this._showPopup(this._link, this._name)});

    /* Листенер на корзину-удаление */
    this._element.querySelector('.cards__delete-button').addEventListener('click', this._delete);

    /* Листенер на лайк */
    this._element.querySelector('.cards__like-button').addEventListener('click', this._like);

  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__image').src = this._link;
    this._element.querySelector('.cards__title').textContent = this._name;
    this._element.querySelector('.cards__image').alt = this._name;

    this._setEventListeners();
    return this._element;
  }
}

export {Card}
