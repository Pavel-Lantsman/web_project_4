export default class UserInfo {
  constructor({ userNameElement, userJobElement }) {
    this._userNameElement = userNameElement;
    this._userJobElement = userJobElement;
  }

  getUserInfo() {
    this._userData = {
      name: this._userNameElement.textContent,
      job: this._userJobElement.textContent,
    };
    return this._userData;
  }

  setUserInfo({ inputName, inputJob }) {
    this._userNameElement.textContent = inputName;
    this._userJobElement.textContent = inputJob;
  }
}