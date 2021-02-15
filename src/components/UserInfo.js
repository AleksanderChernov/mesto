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

  updateUserInfo() {
    fetch('https://mesto.nomoreparties.co/v1/cohort-20/users/me', {
      method: 'PATCH',
    headers: {
      authorization: 'd54a52cd-17ec-46b8-88b8-d32012d30e47',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: this._userName.textContent,
      about: this._occupation.textContent
    })
  });
  }
}
