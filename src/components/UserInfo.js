export class UserInfo {
  constructor({ usernameSelector, profileActivitySelector }) {
    this._usernameSelector = usernameSelector;
    this._profileActivitySelector = profileActivitySelector;
    this._usernameElement = document.querySelector(this._usernameSelector);
    this._profileActivityElement = document.querySelector(
      this._profileActivitySelector
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
