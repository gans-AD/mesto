const popupEditProfile = document.querySelector(".popup_edit");
const popupNewLocation = document.querySelector(".popup_location");
const popupImage = document.querySelector(".popup_image");
const buttonEditElement = document.querySelector(".profile__edit-button"); // кнопка редактирования
const buttonAddElement = document.querySelector(".profile__add-button");
const popupSaveButtonElement = document.querySelector(".form__save-btn"); // кнопка сохранить
const popupEditNameElement = document.querySelector(".form__input_name"); //имя пользователя в попапе
const popupEditActivity = document.querySelector(".form__input_activity"); //род занятий пользователя в попапе
const formLocation = document.forms.location;
const locationAddNameInput = document.querySelector(
  ".form__input_location-name"
); //название места, для добавления карточки
const locationAddLinkInput = document.querySelector(
  ".form__input_location-url"
); // ссылка на фото,  для добавления карточки
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

  //открытие popup просмотра фото
  placePhoto.addEventListener("click", openPhotoPopup);

  return placeElement;
}

//открытие popup просмотра фото
function openPhotoPopup(evt) {
  const photoTarget = evt.target;
  photoZoomable.src = photoTarget.src;
  photoZoomable.alt = photoTarget.alt;
  photoZoomableTitle.textContent = photoTarget.textContent;

  openPopup(popupImage);
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
  closePopup(popupNewLocation);
  formLocation.reset();
  enableValidation(selectorsValidation);
}

//открытие popup
function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", ClosePopupKeyHandler);
}

//закрытие popup
function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", ClosePopupKeyHandler);
}

//закрытие popup клавишей Esc
function ClosePopupKeyHandler(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}

//открытие popup редактирования профиля
function openProfilePopup() {
  popupEditNameElement.value = profileName.textContent;
  popupEditActivity.value = profileActivity.textContent;
  openPopup(popupEditProfile);
}

//кнопка сохранить
function save(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameElement.value;
  profileActivity.textContent = popupEditActivity.value;
  closePopup(popupEditProfile);
}

//навешивание обработчиков кнопки закрытия popup
function closePopupSetListeners() {
  const popupList = document.querySelectorAll(".popup");

  popupList.forEach((popupElement) => {
    //закрытие popup кликом мыши
    popupElement.addEventListener("click", (evt) => {
      const targetElement = evt.target;
      const currentTargetElement = evt.currentTarget;

      if (
        targetElement === currentTargetElement ||
        targetElement.classList.contains("close-btn")
      ) {
        closePopup(popupElement);
      }
    });
  });
}

//----- обработчики событий -----
//открытие popup редактирования профиля
buttonEditElement.addEventListener("click", () => {
  openProfilePopup();
});

//отрытие popup добавления фотографии
buttonAddElement.addEventListener("click", () => {
  openPopup(popupNewLocation);
});

//кнопка сохранить
popupEditProfile.addEventListener("submit", save);

//добавление новой карточки
popupNewLocation.addEventListener("submit", addNewCard);

// -------------------------------------

downloadCards(initialCards);
closePopupSetListeners();
