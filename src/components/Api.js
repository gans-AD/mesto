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
}
