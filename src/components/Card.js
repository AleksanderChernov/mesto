class Card {
  constructor(
    data,
    myId,
    template,
    api,
    handleCardClick,
    handleTrashbinClick
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likesAmount = data.likes
    this._myId = myId;
    this._template = template;
    this._api = api;
    this._showPopup = handleCardClick;
    this._handleTrashbin = handleTrashbinClick;
    this._like = this._like.bind(this);
  }

  _getTemplate() {
    const cardTemplate = this._template.content
      .querySelector(".cards")
      .cloneNode("true");
    return cardTemplate;
  }

  _checkLikeValidity() {
    this._thoseWhoLiked = this._likesAmount.map(({ _id }) => _id);
    if (this._likesAmount.length > 0) {
      if (this._thoseWhoLiked.includes(this._myId)) {
        this._element
          .querySelector(".cards__like-button")
          .classList.add("cards__like-button_pressed");
      }
    }
  }

  _like(e) {
    if (e.target.classList.contains("cards__like-button_pressed")) {
      this._api.dislikeCard(this._cardId).then((res) => {
        this._likeCounter.textContent = res.likes.length;
        e.target.classList.remove("cards__like-button_pressed");
      }).catch((err) => {
        console.log(err);
      });
    } else {
      this._api.likeCard(this._cardId).then((res) => {
        this._likeCounter.textContent = res.likes.length;
        e.target.classList.add("cards__like-button_pressed");
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  delete() {
    this._element.remove();
/*     this._element = null; */
  }

  returnCardID() {
    return this._data._id;
  }

  _setEventListeners() {
    /* Вешаем листенер на увеличение картинки*/
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._showPopup(this._link, this._name);
      });

    /* Листенер на корзину-удаление */
    this._element
      .querySelector(".cards__delete-button")
      .addEventListener("click", ()=>{this._handleTrashbin()});

    /* Листенер на лайк */
    this._element
      .querySelector(".cards__like-button")
      .addEventListener("click", this._like);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardsImage = this._element.querySelector(".cards__image");
    this._likeCounter = this._element.querySelector(".cards__like-number");
    this._likeCounter.textContent = this._likesAmount.length;
    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._element.querySelector(".cards__title").textContent = this._name;
    this._checkLikeValidity();
    this._setEventListeners();
    this._isMyCard();
    return this._element;
  }

  _isMyCard() {
    this._authorId = this._data.owner._id;
    if (this._authorId !== this._myId) {
      this._element.querySelector(".cards__delete-button").remove();
    }
  }
}

export { Card };
