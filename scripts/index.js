const popupEditProfile = document.querySelector(".popup_edit");
const popupNewLocation = document.querySelector(".popup_location");
const popupImage = document.querySelector(".popup_image");
const buttonEditElement = document.querySelector(".profile__edit-button"); // кнопка редактирования
const buttonAddElement = document.querySelector(".profile__add-button");
const popupCloseButtonElements = document.querySelectorAll(".close-btn"); //кнопки закрытия popup
const popupSaveButtonElement = document.querySelector(".form__save-btn"); // кнопка сохранить
const popupEditNameElement = document.querySelector(".form__field_name"); //имя пользователя в попапе
const popupEditActivity = document.querySelector(".form__field_activity"); //род занятий пользователя в попапе
const locationAddNameInput = document.querySelector(".form__field_location-name"); //название места, для добавления карточки
const locationAddLinkInput = document.querySelector(".form__field_location-url"); // ссылка на фото,  для добавления карточки
const profileName = document.querySelector(".profile__name"); //имя пользователя в профиле на странице
const profileActivity = document.querySelector(".profile__activity"); //род занятий пользователя в профиле на странице
const placesElement = document.querySelector(".places");
const placeTemplate = document.querySelector(".place-template"); //template карточки с местом
const photoZoomable = document.querySelector(".image-popup__photo");
const photoZoomableTitle = document.querySelector(".image-popup__title");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Рускеала",
    link: "https://images.unsplash.com/photo-1548288242-d454d4648b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//создание карточки на основе template элемента
function createCard(item) {
  const placeElement = placeTemplate.content.cloneNode(true);
  const placePhoto = placeElement.querySelector(".place__photo");
  const placeTitle = placeElement.querySelector(".place__title");
  const buttonLike = placeElement.querySelector(".like");
  const buttonTrash = placeElement.querySelector(".trash");

  placeTitle.textContent = item.name;
  placePhoto.src = item.link;
  placePhoto.alt = item.name;

  //кнопка like
  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("like_activated");
  });

  //кнопка удаления карточки
  buttonTrash.addEventListener("click", (evt) => {
    buttonTrash.closest(".place").remove();
  });

  return placeElement;
}

//добавление новой карточки в разметку
function addCard(item) {
  const newCard = createCard(item);
  placesElement.prepend(newCard);
}

//загрузка начальных карточек из массива
function downloadCards(items) {
  items.forEach(addCard);
}

function addNewCard(evt) {
  evt.preventDefault();
  const objectNewLocation = {};
  objectNewLocation.name = locationAddNameInput.value;
  objectNewLocation.link = locationAddLinkInput.value;
  addCard(objectNewLocation);
  openPopup(popupNewLocation);
  locationAddNameInput.value = "";
  locationAddLinkInput.value = "";
  closePopup(popupNewLocation);
}

//открытие popup
function openPopup (element) {
  element.classList.add("popup_opened");
}

//закрытие popup
function closePopup (element) {
  element.classList.remove("popup_opened");
}

//открытие popup редактирования профиля
function openProfilePopup () {
  popupEditNameElement.value = profileName.textContent;
  popupEditActivity.value = profileActivity.textContent;
  openPopup(popupEditProfile);
};

//открытие popup просмотра фото
function openPhotoPopup (evt) {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains("place__photo")) {
    const parentElement = eventTarget.closest(".place");
    const parentTitle = parentElement.querySelector(".place__title").textContent;

    photoZoomable.src = eventTarget.src;
    photoZoomable.alt = eventTarget.alt;
    photoZoomableTitle.textContent = parentTitle;

    openPopup(popupImage);
  }
}

//кнопка сохранить
function save (evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameElement.value;
  profileActivity.textContent = popupEditActivity.value;
  closePopup(popupEditProfile);
};

//----- обработчики событий -----
//открытие popup редактирования профиля
buttonEditElement.addEventListener("click", () => {
  openProfilePopup();
});

//отрытие popup добавления фотографии
buttonAddElement.addEventListener("click", () => {
  openPopup(popupNewLocation);
});

//кнопка закрыть
popupCloseButtonElements.forEach((element) => {
  element.addEventListener("click", (evt) => {
    closePopup(evt.target.closest(".popup"));
  });
});

//кнопка сохранить
popupEditProfile.addEventListener("submit", save);

//добавление новой карточки
popupNewLocation.addEventListener("submit", addNewCard);

//открытие popup просмотра фото
placesElement.addEventListener("click", openPhotoPopup);
// -------------------------------------
downloadCards(initialCards);
