export class UserInfo {
  constructor({ usernameSelector, profileActivitySelector }) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._profileActivityElement = document.querySelector(
      profileActivitySelector
    );
  }

  //возвращает объект с данными пользователя
  getUserInfo() {
    const profileInfo = {
      username: this._usernameElement.textContent,
      activity: this._profileActivityElement.textContent,
    };

    return profileInfo;
  }

  //вносит данные пользователя из формы
  setUserInfo(data) {
    this._usernameElement.textContent = data.username;
    this._profileActivityElement.textContent = data.activity;
  }
}
