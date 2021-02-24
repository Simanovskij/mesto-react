class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  _checkRepsonse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  setUserInfo(item) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: item.name,
        about: item.about,
      }),
    })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  setNewCard(item) {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      }),
    })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  delCard(item) {
    return fetch(`${this._baseUrl}cards/${item._id}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  changeLikeCardStatus(item, isLiked) {
    if (isLiked) {
      return this.delLike(item);
    } else {
      return this.setLike(item);
    }
  }

  setLike(item) {
    return fetch(`${this._baseUrl}cards/likes/${item._id}`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  delLike(item) {
    return fetch(`${this._baseUrl}cards/likes/${item._id}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res =>
        this._checkRepsonse(res)
      );
  }

  setAvatar(item) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar: item.avatar,
      }),
    }
    )
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19/',
  headers: {
    authorization: '671a720e-cba7-4f35-b61f-172e84bd5055',
    'Content-Type': 'application/json'
  }
});

export default api;