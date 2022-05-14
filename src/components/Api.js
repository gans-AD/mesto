export class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _requestHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`,
    { headers: this._headers })
    .then(
      this._requestHandler
    );
  }

  //добавление новой карточки
  addCard(data) {
    return fetch(`${this._url}/cards`,
    { method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.locationName,
        link: data.locationUrl
      })
    })
    .then(
      this._requestHandler
    );
  }

  //удаление карточки
  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`,
    { method: 'DELETE',
      headers: this._headers
    })
    .then(
      this._requestHandler
    );
  }

  //поставить like
  putLike(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`,
    { method: 'PUT',
      headers: this._headers
     })
    .then(
      this._requestHandler
    );
  }

  //убрать like
  deleteLike(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`,
    { method: 'DELETE',
      headers: this._headers
     })
    .then(
      this._requestHandler
    );
  }

  //загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`,
    { headers: this._headers })
    .then(
      this._requestHandler
    );
  }

  //редактирование профиля
  editUserInfo(data) {
    return fetch(`${this._url}/users/me`,
    { method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.activity
      })
     })
    .then(
      this._requestHandler
    );
  }

  //обновление аватарки
  editAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`,
    { method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
     })
    .then(
      this._requestHandler
    );
  }
}
