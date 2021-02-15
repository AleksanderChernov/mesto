class Card {
  constructor(
    data,
    myId,
    template,
    api,
    deletionMessage,
    handleCardClick,
    handleTrashbinClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._cardLikes = data.likes;
    /* console.log(this._cardLikes); */
    this._thoseWhoLiked = this._cardLikes.map(({ _id }) => _id);
    /* console.log("Кто лайкнул  " + this._thoseWhoLiked); */
    this._cardId = data._id;
    /* console.log('а вот и ID карточки  ' + this._cardId) */
    this._authorId = data.owner._id;
    this._myId = myId;
    /* console.log(this._myId); */
    this._template = template;
    this._api = api;
    /* console.log(this._api); */
    this._showPopup = handleCardClick;
    this._deletionForm = deletionMessage;
    this._openTrashbinConfirmation = handleTrashbinClick;
    this._like = this._like.bind(this);
  }

  _getTemplate() {
    const cardTemplate = this._template.content
      .querySelector(".cards")
      .cloneNode("true");
    return cardTemplate;
  }

  /* _findMyLike() {
    return this._cardLikes === this._myId;
  } */

  /* checkEquity() {
    if (this._thoseWhoLiked.includes((item) => item === this._myId))
      console.log("равны");
  } */

  _checkLikeValidity() {
    if (this._cardLikes.length > 0) {
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
        this._likes = res.likes.length;
        this._likeCounter.textContent = this._likes;
        e.target.classList.remove("cards__like-button_pressed");
      });
    } else {
      this._api.likeCard(this._cardId).then((res) => {
        console.log("дизлайк");
        this._likes = res.likes.length;
        this._likeCounter.textContent = this._likes;
        e.target.classList.add("cards__like-button_pressed");
      });
    }
  }
  /*   {
    if (e.target.classList.contains("cards__like-button_pressed")) {
      this._api.likeCard(this._cardId).then((res) => {
        console.log("лайк  " + res.likes.length);
        this._likes = res.likes.length;
        this._likeCounter.textContent = this._likes;
        e.target.classList.add("cards__like-button_pressed");
      });
    } else {
      this._api.dislikeCard(this._cardId).then((res) => {
        console.log("дизлайк  " + res.likes.length);
        this._likes = res.likes.length;
        this._likeCounter.textContent = this._likes;
        e.target.classList.remove("cards__like-button_pressed");
      });
    }
  } */

  _delete(e) {
    e.target.closest(".cards").remove();
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
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._showPopup(this._link, this._name);
      });

    /* Листенер на корзину-удаление */
    this._element
      .querySelector(".cards__delete-button")
      .addEventListener("click", this._openTrashbinConfirmation);

    /* Листенер на лайк */
    this._element
      .querySelector(".cards__like-button")
      .addEventListener("click", this._like);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardsImage = this._element.querySelector(".cards__image");
    this._likeCounter = this._element.querySelector(".cards__like-number");
    this._likeCounter.textContent = this._likes;
    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._element.querySelector(".cards__title").textContent = this._name;
    this._checkLikeValidity();
    this._setEventListeners();
    return this._element;
  }

  _isMyCard() {
    if (this._authorId !== this._myId) {
      this._element.querySelector(".cards__delete-button").remove();
    }
  }
}

export { Card };
