console.log("Привет мир");

const editPopupElement = document.querySelector(".edit-popup");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupCloseButtonElement = document.querySelector(".edit-form__cls-btn");

//функция открывания окошка
const openPopup = function () {
  editPopupElement.classList.remove("edit-popup_hidden");
};

//функция закрывания окошка
const closePopup = function () {
  editPopupElement.classList.add("edit-popup_hidden");
};

//обработчики событий
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
