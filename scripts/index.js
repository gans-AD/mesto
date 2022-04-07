import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

const popupEditProfile = document.querySelector(".popup_edit");
const popupNewLocation = document.querySelector(".popup_location");
const buttonEditElement = document.querySelector(".profile__edit-button"); // кнопка редактирования
const buttonAddElement = document.querySelector(".profile__add-button");
const popupEditNameElement = document.querySelector(".form__input_name"); //имя пользователя в попапе
const popupEditActivity = document.querySelector(".form__input_activity"); //род занятий пользователя в попапе
const formLocation = document.forms.location;
const formProfile = document.forms.profile;
const locationAddNameInput = document.querySelector(
  ".form__input_location-name"
); //название места, для добавления карточки
const locationAddLinkInput = document.querySelector(
  ".form__input_location-url"
); // ссылка на фото,  для добавления карточки
const profileName = document.querySelector(".profile__name"); //имя пользователя в профиле на странице
const profileActivity = document.querySelector(".profile__activity"); //род занятий пользователя в профиле на странице
const placesElement = document.querySelector(".places");
const placeTemplate = ".place-template"; //template карточки с местом

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

const selectorsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_inactive",
  inputErrorClass: "form__input_errored",
  errorClass: "form__input-error_active",
};

//создание новой карточки
function createCard(data) {
  const card = new Card(data.name, data.link, placeTemplate);
  const cardElement = card.createCard();
  return cardElement;
}

//добавление новой карточки в разметку
function addCard(data, parent) {
  const cardElement = createCard(data);
  parent.prepend(cardElement);
}

//загрузка начальных карточек из массива
function downloadCards(items) {
  items.forEach((item) => {
  addCard(item, placesElement);
  });
}

function addNewCard(evt) {
  evt.preventDefault();
  const objectNewLocation = {};
  objectNewLocation.name = locationAddNameInput.value;
  objectNewLocation.link = locationAddLinkInput.value;
  addCard(objectNewLocation, placesElement);
  closePopup(popupNewLocation);
  formLocation.reset();
  addLocationValidation.toggleButtonState();
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

const profileValidation = new FormValidator(selectorsValidation, formProfile);
const addLocationValidation = new FormValidator(selectorsValidation, formLocation);
profileValidation.enableValidation();
addLocationValidation.enableValidation();

downloadCards(initialCards);
