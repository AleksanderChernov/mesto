export default class UserInfo {
  constructor({nameSelector, occupationSelector, avatarSelector}) {
    this._userName = nameSelector;
    this._occupation = occupationSelector;
    this._avatar = avatarSelector;
  }

  setUserInfo = ({newName, newJob, newAvatar})=>{
    this._userName.textContent = newName;
    this._occupation.textContent = newJob;
    this._avatar.src = newAvatar;
  }

  getUserInfo() {
    const nameInput = this._userName.textContent;
    const jobInput = this._occupation.textContent;
    return {nameInput: nameInput, jobInput: jobInput};
  }

}
