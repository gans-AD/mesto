export class UserInfo {
  constructor({ usernameSelector, profileActivitySelector }) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._profileActivityElement = document.querySelector(
      profileActivitySelector
    );
    this._username = this._usernameElement.textContent;
    this._profileActivity = this._profileActivityElement.textContent;
  }

  getUserInfo() {
    const profileInfo = {};
    profileInfo.username = this._username;
    profileInfo.activity = this._profileActivity;
    return profileInfo;
  }

  setUserInfo(newUsername, newActivity) {
    this._username = newUsername;
    this._profileActivity = newActivity;
  }
}
