(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__avatar-edit-button"),r=document.querySelector(".form__input_name"),o=document.querySelector(".form__input_activity"),i=document.forms.location,a=document.forms.profile,l=document.forms.avatar,u={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save-btn",inactiveButtonClass:"form__save-btn_inactive",inputErrorClass:"form__input_errored",errorClass:"form__input-error_active"};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r,o){var i=t.name,a=t.link,l=t.likes,u=t._id,c=t.owner,s=o.handleCardClick,f=o.handleDeleteCard,h=o.handleLikeButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=i,this._photo=a,this._alt=i,this._likes=l,this._id=u,this._userId=r,this._ownerId=c._id,this._templateCardSelector=n,this._handleCardClick=s,this._handleDeleteCard=f,this._handleLikeButton=h}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateCardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._cardPhotoElement=this._element.querySelector(".place__photo"),this._likeButton=this._element.querySelector(".like"),this._likeCounter=this._element.querySelector(".like-counter"),this._trashButton=this._element.querySelector(".trash"),this._setEventListeners(),this._userId===this._ownerId&&this._trashButton.classList.add("trash_active"),this.likeStatus()&&this._likeButton.classList.add("like_activated"),this._cardPhotoElement.src=this._photo,this._cardPhotoElement.alt=this._title,this._element.querySelector(".place__title").textContent=this._title,this._likeCounter.textContent=this._likes.length,this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"likeStatus",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"changeLike",value:function(e){this._likes=e,this.likeStatus()?this._likeButton.classList.add("like_activated"):this._likeButton.classList.remove("like_activated"),this._likeCounter.textContent=e.length}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeButton()})),this._trashButton.addEventListener("click",(function(t){e._handleDeleteCard()})),this._cardPhotoElement.addEventListener("click",(function(){e._handleCardClick(e._title,e._photo)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r){var o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=o,this._renderer=i,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._initialArray;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}],n&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){var t=e.target;(t===this._popupElement||t.classList.contains("close-btn"))&&this.close()}},{key:"setEventListeners",value:function(){this._popupElement.addEventListener("mousedown",this._handleClickClose)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._photoElement=t._popupElement.querySelector(".image-popup__photo"),t._photoTitle=t._popupElement.querySelector(".image-popup__title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._photoElement.src=t,this._photoElement.alt=e,this._photoTitle.textContent=e,v(E(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submit=t,n._form=n._popupElement.querySelector(".form"),n._inputList=n._form.querySelectorAll("input"),n._submitButton=n._form.querySelector(".form__save-btn"),n._handleSubmit=n._handleSubmit.bind(P(n)),n._defaultButtonText=n._submitButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"_handleSubmit",value:function(e){e.preventDefault();var t=this._getInputValues();this._submit(t)}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение ...":this._defaultButtonText}},{key:"setEventListeners",value:function(){C(I(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",this._handleSubmit)}},{key:"close",value:function(){C(I(a.prototype),"close",this).call(this),this._form.reset()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function A(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submit=t,n}return t=a,(n=[{key:"open",value:function(e){this._cardId=e,R(U(a.prototype),"open",this).call(this)}},{key:"_handleSubmit",value:function(e){}},{key:"setEventListeners",value:function(){var e=this;R(U(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._cardId)}))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.usernameSelector,r=t.profileActivitySelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._usernameElement=document.querySelector(n),this._profileActivityElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._usernameElement.textContent,activity:this._profileActivityElement.textContent,avatar:this._avatarElement.src,id:this._id}}},{key:"setUserInfo",value:function(e){this._usernameElement.textContent=e.username,this._profileActivityElement.textContent=e.activity,this._id=e._id,this._avatarElement.src=e.avatar}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorsValidation=t,this._form=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setInputValidations()}},{key:"_showInputError",value:function(e,t){this._errorElement=this._form.querySelector(".".concat(e.name,"-error")),this._errorElement.textContent=t,e.classList.add(this._selectorsValidation.inputErrorClass),this._errorElement.classList.add(this._selectorsValidation.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.name,"-error")),this._errorElement.textContent="",e.classList.remove(this._selectorsValidation.inputErrorClass),this._errorElement.classList.remove(this._selectorsValidation.errorClass)}},{key:"toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonElement.classList.remove(this._selectorsValidation.inactiveButtonClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._selectorsValidation.inactiveButtonClass),this._buttonElement.disabled=!0)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setInputValidations",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._selectorsValidation.inputSelector)),this._buttonElement=this._form.querySelector(this._selectorsValidation.submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=null,G=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_requestHandler",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._requestHandler)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.locationName,link:e.locationUrl})}).then(this._requestHandler)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._requestHandler)}},{key:"putLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._requestHandler)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._requestHandler)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._requestHandler)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.activity})}).then(this._requestHandler)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._requestHandler)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"2ab4ce65-b376-4883-b59c-64454531d09d","Content-Type":"application/json"}});Promise.all([G.getUserInfo(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserInfo({username:o.name,activity:o.about,_id:o._id,avatar:o.avatar}),K.renderItems(i)})).catch((function(e){console.log(e)}));var K=new h({items:[],renderer:function(e){var t=Y(e);K.addItem(t)}},".places"),Q=new N({usernameSelector:".profile__name",profileActivitySelector:".profile__activity",avatarSelector:".profile__avatar"}),W=new g(".popup_image");W.setEventListeners();var X=new D(".popup_delete-card",(function(e){G.deleteCard(e).then((function(){return F.deleteCard()})).then((function(){return F=null})).then((function(){return X.close()})).catch((function(e){console.log(e)}))}));X.setEventListeners();var Y=function(e){var t=new s(e,".place-template",Q._id,{handleCardClick:function(){return W.open(e.title,e.link)},handleDeleteCard:function(){F=t,X.open(e._id)},handleLikeButton:function(){t.likeStatus()?G.deleteLike(e._id).then((function(e){t.changeLike(e.likes)})).catch((function(e){console.log(e)})):G.putLike(e._id).then((function(e){t.changeLike(e.likes)})).catch((function(e){console.log(e)}))}});return t.createCard()},Z=new q(".popup_edit",(function(e){Z.renderLoading(!0),G.editUserInfo(e).then((function(e){Q.setUserInfo({username:e.name,activity:e.about,_id:e._id,avatar:e.avatar}),Z.close(),ne.toggleButtonState()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}));Z.setEventListeners();var ee=new q(".popup_location",(function(e){ee.renderLoading(!0),G.addCard(e).then((function(e){var t=Y(e);K.addItem(t),ee.close(),re.toggleButtonState()})).catch((function(e){console.log(e)})).finally((function(){ee.renderLoading(!1)}))}));ee.setEventListeners();var te=new q(".popup_avatar",(function(e){te.renderLoading(!0),G.editAvatar(e.avatarUrl).then((function(e){Q.setUserInfo({username:e.name,activity:e.about,_id:e._id,avatar:e.avatar}),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))}));te.setEventListeners(),e.addEventListener("click",(function(){ne.resetValidation();var e=Q.getUserInfo();r.value=e.username,o.value=e.activity,Z.open()})),t.addEventListener("click",(function(){re.resetValidation(),ee.open()})),n.addEventListener("click",(function(){oe.resetValidation(),te.open()}));var ne=new M(u,a),re=new M(u,i),oe=new M(u,l);ne.enableValidation(),re.enableValidation(),oe.enableValidation()})();