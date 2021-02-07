export default class UserInfo {
  constructor({nameSelector, occupationSelector}) {
    this._userName = nameSelector;
    this._occupation = occupationSelector;
  }

  setUserInfo = ({newName, newJob})=>{
    this._userName.textContent = newName;
    this._occupation.textContent = newJob;
  }

  getUserInfo () {
    const nameInput = this._userName.textContent;
    const jobInput = this._occupation.textContent;
    return {nameInput: nameInput, jobInput: jobInput};
  }
}
