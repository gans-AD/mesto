export const baseUrlMesto = 'https://mesto.nomoreparties.co/v1/cohort-40';
export const myToken = '2ab4ce65-b376-4883-b59c-64454531d09d';
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
