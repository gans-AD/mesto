const popupEditProfile = document.querySelector(".form_edit-profile").parentElement;
const popupNewLocation = document.querySelector(".form_new-location").parentElement;
const popupImage = document.querySelector(".image-popup").parentElement;
const editButtonElement = document.querySelector(".profile__edit-button"); // кнопка редактирования
const addButtonElement = document.querySelector(".profile__add-button");
const popupCloseButtonElements = document.querySelectorAll(".form__cls-btn"); //кнопки закрытия popup
const popupSaveButtonElement = document.querySelector(".form__save-btn"); // кнопка сохранить
const editPopupNameElement = document.querySelector(".form__field_name"); //имя пользователя в попапе
const editPopupActivity = document.querySelector(".form__field_activity"); //род занятий пользователя в попапе
const addLocationNameInput = document.querySelector(".form__field_location-name"); //название места, для добавления карточки
const addLocationLinkInput = document.querySelector(".form__field_location-url"); // ссылка на фото,  для добавления карточки
const profileName = document.querySelector(".profile__name"); //имя пользователя в профиле на странице
const profileActivity = document.querySelector(".profile__activity"); //род занятий пользователя в профиле на странице
const placesElement = document.querySelector(".places");
const placeTemplate = document.querySelector(".place-template"); //template карточки с местом
const zoomablePhoto = document.querySelector(".image-popup__photo");
const zoomablePhotoTitle = document.querySelector(".image-popup__title");
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

function addPlace(item) {
  const placeElement = placeTemplate.content.cloneNode(true);
  const placePhoto = placeElement.querySelector(".place__photo");
  const placeTitle = placeElement.querySelector(".place__title");

  placeTitle.textContent = item.name;
  placePhoto.src = item.link;
  placePhoto.alt = item.name;

  placesElement.prepend(placeElement);
}

function addPlaces(items) {
  items.forEach(addPlace);
}

//открывание(закрывание) окошка редактирования профиля
const togglePopup = function (element) {
  element.classList.toggle("popup_opened");
  fillPopup();
};

//заполнение popup редактирования профиля данными
const fillPopup = function () {
  editPopupNameElement.value = profileName.innerText;
  editPopupActivity.value = profileActivity.innerText;
};

//кнопка сохранить
const save = function (evt) {
  evt.preventDefault();
  profileName.innerText = editPopupNameElement.value;
  profileActivity.innerText = editPopupActivity.value;
  togglePopup(popupEditProfile);
};

//открытие popup редактирования профиля
editButtonElement.addEventListener("click", () => {
  togglePopup(popupEditProfile);
});

//отрытие popup добавления фотографии
addButtonElement.addEventListener("click", () => {
  togglePopup(popupNewLocation);
});

//кнопка закрыть
popupCloseButtonElements.forEach((element) => {
  element.addEventListener("click", (evt) => {
    togglePopup(evt.target.closest(".popup"));
  });
});

//кнопка сохранить
popupEditProfile.addEventListener("submit", save);

//добавление новой карточки
popupNewLocation.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newLocationObj = {};
  newLocationObj.name = addLocationNameInput.value;
  newLocationObj.link = addLocationLinkInput.value;
  addPlace(newLocationObj);
  togglePopup(popupNewLocation);
  addLocationNameInput.value = "";
  addLocationLinkInput.value = "";
});

//кнопка like
placesElement.addEventListener("click", (evt) => {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains("like")) {
    eventTarget.classList.toggle("like_activated");
  }
});

//кнопка удаления карточки
placesElement.addEventListener("click", (evt) => {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains("trash")) {
    eventTarget.closest('.place').remove();
  }
});

//открытие popup просмотра фото
placesElement.addEventListener("click", (evt) => {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains("place__photo")) {
    const parentElement = eventTarget.closest(".place");
    const parentTitle = parentElement.querySelector(".place__title").textContent;

    zoomablePhoto.src = eventTarget.src;
    zoomablePhoto.alt = eventTarget.alt;
    zoomablePhotoTitle.textContent = parentTitle;

    togglePopup(popupImage);
  }
});

addPlaces(initialCards);
