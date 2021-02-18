export default class Api {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.url;
    this._myInfo = options.me;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
      }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "GET",
    }).then(this._checkResponse)
  }

  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkResponse)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkResponse)
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    }).then(this._checkResponse)
  }

  dislikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkResponse)
  }

  updateUserInfo({name, about}) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
    })
  }).then(this._checkResponse)
  }

  addMyCard(info) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: info.name,
        link: info.link,
      })
    }).then(this._checkResponse)
  }

  getMyProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "GET",
    }).then(this._checkResponse)
  }
}
