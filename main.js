(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._cardId=e._id,this._likesAmount=e.likes,this._myId=n,this._template=o,this._api=r,this._showPopup=i,this._handleTrashbin=a,this._like=this._like.bind(this)}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".cards").cloneNode("true")}},{key:"_checkLikeValidity",value:function(){this._thoseWhoLiked=this._likesAmount.map((function(e){return e._id})),this._likesAmount.length>0&&this._thoseWhoLiked.includes(this._myId)&&this._element.querySelector(".cards__like-button").classList.add("cards__like-button_pressed")}},{key:"_like",value:function(e){var t=this;e.target.classList.contains("cards__like-button_pressed")?this._api.dislikeCard(this._cardId).then((function(n){t._likeCounter.textContent=n.likes.length,e.target.classList.remove("cards__like-button_pressed")})).catch((function(e){console.log(e)})):this._api.likeCard(this._cardId).then((function(n){t._likeCounter.textContent=n.likes.length,e.target.classList.add("cards__like-button_pressed")})).catch((function(e){console.log(e)}))}},{key:"delete",value:function(){this._element.remove()}},{key:"returnCardID",value:function(){return this._data._id}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".cards__image").addEventListener("click",(function(){e._showPopup(e._link,e._name)})),this._element.querySelector(".cards__delete-button").addEventListener("click",(function(){e._handleTrashbin()})),this._element.querySelector(".cards__like-button").addEventListener("click",this._like)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardsImage=this._element.querySelector(".cards__image"),this._likeCounter=this._element.querySelector(".cards__like-number"),this._likeCounter.textContent=this._likesAmount.length,this._cardsImage.src=this._link,this._cardsImage.alt=this._name,this._element.querySelector(".cards__title").textContent=this._name,this._checkLikeValidity(),this._setEventListeners(),this._isMyCard(),this._element}},{key:"_isMyCard",value:function(){this._authorId=this._data.owner._id,this._authorId!==this._myId&&this._element.querySelector(".cards__delete-button").remove()}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputs=this._form.querySelectorAll(this._inputSelector)}var t,o;return t=e,(o=[{key:"_showError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)}},{key:"clearValidation",value:function(){var e=this;this._inputs.forEach((function(t){e._hideError(t)}))}},{key:"highlightErrors",value:function(){var e=this;this._inputs.forEach((function(t){e._showError(t)}))}},{key:"setButtonState",value:function(e){e?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0)}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setEventListener",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(n){e._checkValidity(t),e.setButtonState(e._form.checkValidity())}))}))}},{key:"enableValidation",value:function(){this._setEventListener(),this._form.addEventListener("submit",(function(e){e.preventDefault()})),this.setButtonState(this._form.checkValidity())}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;this._clear(),this._items=e,e.forEach((function(e){t._renderer(e)}))}}])&&r(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._overlayClose=this._overlayClose.bind(this),this._close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_state_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_state_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_overlayClose",value:function(e){var t=e.target;t.classList.contains("popup_state_opened")&&t.closest(".popup").classList.remove("popup_state_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._overlayClose),this._popup.querySelector(".popup__close-button").addEventListener("click",this._close)}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(r){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n,o=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=o,n._form=n._popup.querySelector(".popup__form"),n._saveButton=n._popup.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formsInputs=this._popup.querySelectorAll(".popup__input"),this._inputValues={},this._formsInputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"close",value:function(){l(h(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_isLoading",value:function(e){e&&(this._saveButton.textContent="Сохранение...")}},{key:"setEventListeners",value:function(){var e=this;l(h(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),setTimeout((function(){e.close()}),3e3)}))}}])&&s(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(o);if(r){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__modal-image"),t._title=t._popup.querySelector(".popup__modal-name"),t}return t=a,(n=[{key:"open",value:function(e){m(k(a.prototype),"open",this).call(this),this._image.src=e.link,this._title.textContent=e.name,this._image.alt=e.name}}])&&y(t.prototype,n),a}(u);function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=function(){function e(t){var n,o,r=this,i=t.nameSelector,a=t.occupationSelector,u=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){var t=e.newName,n=e.newJob,o=e.newAvatar;r._userName.textContent=t,r._occupation.textContent=n,r._avatar.src=o},(n="setUserInfo")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._userName=i,this._occupation=a,this._avatar=u}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{nameInput:this._userName.textContent,jobInput:this._occupation.textContent}}}])&&g(t.prototype,n),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(r){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._confirmButton=t._popup.querySelector(".popup__confirm-delete"),t}return t=a,(n=[{key:"open",value:function(e){L(P(a.prototype),"open",this).call(this),this._handleConfirmation=e}},{key:"setEventListeners",value:function(){var e=this;L(P(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(t){t.preventDefault(),e._handleConfirmation(),setTimeout((function(){e.close(t)}),300)}))}}])&&C(t.prototype,n),a}(u);function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._url=t.url,this._myInfo=t.me}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"GET"}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"addMyCard",value:function(e){return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"getMyProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"GET"}).then(this._checkResponse)}}])&&I(t.prototype,n),e}(),T=document.querySelector(".popup__form_profile"),B=document.querySelector(".popup__form_places"),x=document.querySelector(".popup__form_avatar"),V=(document.querySelector(".popup__form_delete"),document.querySelector(".profile__edit-button")),D=document.querySelector(".profile__add-button"),A=document.querySelector(".profile__edit-button-avatar"),N=(document.querySelectorAll(".popup__close-button"),document.querySelector(".popup_profile")),U=document.querySelector(".popup_avatar"),M=document.querySelector(".popup_places"),F=document.querySelector(".popup_images"),J=document.querySelector(".popup_delete"),H=(document.querySelector(".popup__input_entity_avatar-url"),document.querySelector(".profile__avatar")),G=document.querySelector(".popup__input_entity_name"),W=document.querySelector(".popup__input_entity_occupation"),z=document.querySelector(".profile__name"),K=document.querySelector(".profile__occupation"),Q=document.querySelector(".template"),X=(document.querySelector(".template-slot"),document.querySelector(".popup__input_entity_place"),document.querySelector(".popup__input_entity_url"),B.querySelector(".popup__save-button"),document.querySelector(".popup__save-button"),".places"),Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:".popup__input_type_error",errorClass:".popup__error_visible"},Z=new S(F);Z.setEventListeners();var $=new j(J),ee=new w({nameSelector:z,occupationSelector:K,avatarSelector:H}),te=new R({url:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"d54a52cd-17ec-46b8-88b8-d32012d30e47","Content-Type":"application/json; charset=UTF-8"},me:"https://mesto.nomoreparties.co/v1/cohort-20/users/me"});te.getInitialCards().then((function(e){ie.renderItems(e)})).catch((function(e){console.log(e)}));var ne=null;function oe(){te.getMyProfileInfo().then((function(e){ne=e._id,ee.setUserInfo({newName:e.name,newJob:e.about,newAvatar:e.avatar})})).catch((function(e){console.log(e)}))}oe();var re=new _(U,{handleFormSubmit:function(e){te.changeAvatar(e.avatar).then((function(e){ee.setUserInfo({newName:e.name,newJob:e.about,newAvatar:e.avatar})})).then(re._isLoading(!0)).then(oe()).catch((function(e){console.log(e)}))}},".profile__avatar");re.setEventListeners();var ie=new i({renderer:function(e){ie.addItem(ae(e))}},X);function ae(e){var n=new t(e,ne,Q,te,(function(){Z.open(e)}),(function(){$.setEventListeners(),$.open(function(e){return function(){te.deleteCard(e.returnCardID()).then((function(){return e.delete()})).catch((function(e){console.log(e)}))}}(n)),console.log(n)}));return n.generateCard()}var ue=new _(M,{handleFormSubmit:function(e){te.addMyCard(e).then((function(e){ie.prependItem(ae(e))})).then(ue._isLoading(!0)).catch((function(e){console.log(e)}))}},X);ue.setEventListeners();var ce=new _(N,{handleFormSubmit:function(e){te.updateUserInfo({name:e.nameInput,about:e.jobInput}).then((function(e){ee.setUserInfo({newName:e.name,newJob:e.about,newAvatar:e.avatar})})).then(ce._isLoading(!0)).catch((function(e){console.log(e)}))}});ce.setEventListeners();var se=new o(Y,T);se.enableValidation();var le=new o(Y,B);le.enableValidation();var fe=new o(Y,x);fe.enableValidation(),V.addEventListener("click",(function(){se.setButtonState(!1),G.value=z.textContent,W.value=K.textContent,se.clearValidation(),se.setButtonState(!0),ce.open()})),D.addEventListener("click",(function(){le.setButtonState(!1),le.clearValidation(),ue.open()})),A.addEventListener("click",(function(){fe.setButtonState(!1),fe.clearValidation(),re.open()}))})();