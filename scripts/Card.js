import {openPhotoPopup} from './utils.js';

export class Card {
  constructor(title, photo, cardSelector) {
    this._title = title;
    this._photo = photo;
    this._alt = title;
    this._cardSelector = cardSelector
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);
      return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".place__photo").src = this._photo;
    this._element.querySelector(".place__photo").alt = this._title;
    this._element.querySelector(".place__title").textContent = this._title;

    return this._element;
  }

  //навешивание обработчиков на карточку
  _setEventListeners() {
    this._buttonLike();
    this._buttonTrash();
    this._photoPopup();
  }

  //кнопка like
  _buttonLike() {
    this._element.querySelector(".like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("like_activated");
    });
  }

  //кнопка удаления карточки
  _buttonTrash() {
    this._element.querySelector(".trash").addEventListener("click", (evt) => {
      evt.target.closest(".place").remove();
    });
  }

  //открытие popup просмотра фото
  _photoPopup() {
    this._element.querySelector(".place__photo").addEventListener("click", openPhotoPopup);
  }
}


