export class UserInfo {
  constructor({ usernameSelector, profileActivitySelector, avatarSelector }) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._profileActivityElement = document.querySelector(
      profileActivitySelector
    );
    this._avatarElement = document.querySelector(avatarSelector);
  }

  //возвращает объект с данными пользователя
  getUserInfo() {
    const profileInfo = {
      username: this._usernameElement.textContent,
      activity: this._profileActivityElement.textContent,
      avatar: this._avatarElement.src,
      id: this._id
    };

    return profileInfo;
  }

  //вносит данные пользователя из формы
  setUserInfo(data) {
    this._usernameElement.textContent = data.username;
    this._profileActivityElement.textContent = data.activity;
    this._id = data._id;
    this._avatarElement.src = data.avatar;
  }
}
