class Card {
  constructor (data, myId, template, api, deletionMessage, handleCardClick, handleTrashbinClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._cardId = data._id;
    /* console.log('а вот и ID карточки  a' + this._cardId) */
    this._authorId = data.owner._id;
    this._myId = myId;
    this._template = template;
    this._api = api;
    /* console.log(api); */
    this._showPopup = handleCardClick;
    this._deletionForm = deletionMessage;
    this._openTrashbinConfirmation = handleTrashbinClick;
  }

  _getTemplate() {
    const cardTemplate = this._template.content.querySelector('.cards').cloneNode('true');
    return cardTemplate;
  }

  _like(e) {
    e.target.classList.toggle('cards__like-button_pressed');
  }

  _delete(e) {
    e.target.closest('.cards').remove();
    this._element = null;
  }

  _likeAmount() {
    /* this._api.likes.length; */
  }

  /* _deletePopup() {
    this._openTrashbinConfirmation();
  } */

  _setEventListeners() {

    /* Вешаем листенер на увеличение картинки*/
    this._element.querySelector('.cards__image').addEventListener('click', ()=>{this._showPopup(this._link, this._name)});

    /* Листенер на корзину-удаление */
    this._element.querySelector('.cards__delete-button').addEventListener('click', this._openTrashbinConfirmation);

    /* Листенер на лайк */
    this._element.querySelector('.cards__like-button').addEventListener('click', this._like);

  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardsImage = this._element.querySelector('.cards__image');
    this._likeCounter = this._element.querySelector('.cards__like-number');
    this._likeCounter.textContent = this._likes;
    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;
    this._setEventListeners();
    this._isMyCard();
    return this._element;
  }

  _isMyCard() {
    if (this._authorId !== this._myId) {
      this._element.querySelector('.cards__delete-button').remove();
    }
  }

}

export {Card}
