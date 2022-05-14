export class Card {
  constructor(
    { name, link, likes, _id, owner },
    templateCardSelector,
    userId,
    { handleCardClick, handleDeleteCard, handleLikeButton }
  ) {
    this._title = name;
    this._photo = link;
    this._alt = name;
    this._likes = likes;
    this._id = _id; // id карточки
    this._userId = userId; // id пользователя
    this._ownerId = owner._id; // id создателя карточки
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick; //функция, выполняемая при клике на карточку
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeButton = handleLikeButton;
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
    this._likeCounter = this._element.querySelector(".like-counter");
    this._trashButton = this._element.querySelector(".trash");

    this._setEventListeners();

    if (this._userId === this._ownerId) {
      this._trashButton.classList.add("trash_active");
    }

    if (this.likeStatus()) {
      this._likeButton.classList.add("like_activated");
    }

    this._cardPhotoElement.src = this._photo;
    this._cardPhotoElement.alt = this._title;
    this._element.querySelector(".place__title").textContent = this._title;
    this._likeCounter.textContent = this._likes.length;

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  //возрващает true если пользователь ставил like карточки
  likeStatus() {
    return this._likes.some((item) => {
      return item._id === this._userId;
    });
  }

  //меняем иконку и количество лайков
  changeLike(arr) {
    this._likes = arr;
    if (this.likeStatus()) {
      this._likeButton.classList.add("like_activated");
    } else {
      this._likeButton.classList.remove("like_activated");
    }

    this._likeCounter.textContent = arr.length;
  }

  //навешивание обработчиков на карточку
  _setEventListeners() {
    //кнопка like
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    //кнопка удаления карточки
    this._trashButton.addEventListener("click", (evt) => {
      this._handleDeleteCard();
    });

    //открытие popup просмотра фото
    this._cardPhotoElement.addEventListener("click", () => {
      this._handleCardClick(this._title, this._photo);
    });
  }
}
