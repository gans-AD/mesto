export const initialCards = [
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

export const popupEditProfile = ".popup_edit";
export const popupNewLocationSelector = ".popup_location";
export const buttonEditElement = document.querySelector(
  ".profile__edit-button"
); // кнопка редактирования
export const buttonAddElement = document.querySelector(".profile__add-button");
export const inputNameElement = document.querySelector(".form__input_name"); //имя пользователя в попапе
export const inputActivityElement = document.querySelector(
  ".form__input_activity"
); //род занятий пользователя в попапе
export const formLocation = document.forms.location;
export const formProfile = document.forms.profile;

//селекторы информации о пользователе
export const usernameSelector = ".profile__name";
export const profileActivitySelector = ".profile__activity";
export const cardListSelector = ".places";
export const placeTemplate = ".place-template"; //template карточки с местом

export const popupImageSelector = ".popup_image";

export const selectorsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_inactive",
  inputErrorClass: "form__input_errored",
  errorClass: "form__input-error_active",
};
