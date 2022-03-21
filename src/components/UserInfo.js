export default class UserInfo {
    constructor({ userName, userInfo }, avatar) {
        this._name = userName;
        this._about = userInfo;
        this._avatar = avatar;
    }
    getUserInfo() {
        this._userData = { name: this._name.textContent, about: this._about.textContent };
        return this._userData;
    }
    setUserAvatar(data) {
        this._avatar.src = data;
    }
    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }
}