import { openPhotoPopup } from "../utils/utils.js";

export class Card {
  constructor(title, photo, templateCardSelector, handleCardClick) {
    this._title = title;
    this._photo = photo;
    this._alt = title;
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;//функция, выполняемая при клике на карточку
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCardSelector)
      .content.querySelector(".place")
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardPhotoElement = this._element.querySelector(".place__photo");
    this._likeButton = this._element.querySelector(".like");
    this._setEventListeners();

    this._cardPhotoElement.src = this._photo;
    this._cardPhotoElement.alt = this._title;
    this._element.querySelector(".place__title").textContent = this._title;

    return this._element;
  }

  //навешивание обработчиков на карточку
  _setEventListeners() {
    //кнопка like
    this._likeButton.addEventListener("click", (evt) => {
      this._handleLikeButton(evt);
    });

    //кнопка удаления карточки
    this._element.querySelector(".trash").addEventListener("click", (evt) => {
      this._element.remove();
      this._element = null;
    });

    //открытие popup просмотра фото
    this._cardPhotoElement.addEventListener("click", this._handleCardClick);
  }

  _handleLikeButton(evt) {
    this._likeButton.classList.toggle("like_activated");
  }
}
