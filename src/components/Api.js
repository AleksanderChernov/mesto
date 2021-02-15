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
    });
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

  addMyCard(info) {
    console.log(info);
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: info.name,
        link: info.link,
        /* id: info.owner._idф */
      }),
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
