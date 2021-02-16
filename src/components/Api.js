export default class Api {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.url;
    this._myInfo = options.me;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Что-то пошло не так в getInitialCards: ${res.status}`
      );
    });
  }

  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Что-то пошло не так в changeAvatar: ${res.status}`
      );
    });
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так в likeCard: ${res.status}`);
    });
  }

  dislikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так в dislikeCard: ${res.status}`);
    });
  }

  updateUserInfo({name, about}) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-20/users/me', {
      method: 'PATCH',
    headers: {
      authorization: 'd54a52cd-17ec-46b8-88b8-d32012d30e47',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  });
  }

  addMyCard(info) {
    console.log(info);
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: info.name,
        link: info.link,
      })
    });
  }

  getMyProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Что-то пошло не так в getMyProfileInfo: ${res.status}`
      );
    });
  }
}
