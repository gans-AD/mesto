import {
  initialCards,
  popupEditProfile,
  popupNewLocationSelector,
  buttonEditElement,
  buttonAddElement,
  inputNameElement,
  inputActivityElement,
  formLocation,
  formProfile,
  cardListSelector,
  placeTemplate,
  selectorsValidation,
  usernameSelector,
  profileActivitySelector,
  popupImageSelector,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import "./index.css"; // подключение стилей css

//открытие popup просмотра фото
const openPhotoPopup = (title, photo) => {
  const popupPhoto = new PopupWithImage(popupImageSelector);
  popupPhoto.setEventListeners();
  popupPhoto.open(title, photo);
};

//создание новой карточки
const createNewCard = (title, photo) => {
  const card = new Card(title, photo, placeTemplate, openPhotoPopup);
  return card;
};

//исходные карточки
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createNewCard(item.name, item.link);
      const cardElement = card.createCard();
      cardList.addItem(cardElement);
    },
  },
  cardListSelector
);

const userInfo = new UserInfo({ usernameSelector, profileActivitySelector });

const popupProfile = new PopupWithForm(popupEditProfile, (data) => {
  userInfo.setUserInfo(data);
  popupProfile.close();
  profileValidation.toggleButtonState();
});
popupProfile.setEventListeners();

const popupNewLocation = new PopupWithForm(popupNewLocationSelector, (data) => {
  const newCard = createNewCard(data.locationName, data.locationUrl);
  const newCardElement = newCard.createCard();
  cardList.addItem(newCardElement);
  popupNewLocation.close();
  addLocationValidation.toggleButtonState();
});
popupNewLocation.setEventListeners();

cardList.renderItems(); //загружаем карточки на страницу

//----- обработчики событий -----
//открытие popup редактирования профиля
buttonEditElement.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();
  inputNameElement.value = profileData.username;
  inputActivityElement.value = profileData.activity;
  popupProfile.open();
});

//отрытие popup добавления фотографии
buttonAddElement.addEventListener("click", () => {
  popupNewLocation.open();
});

// -------------------------------------

const profileValidation = new FormValidator(selectorsValidation, formProfile);
const addLocationValidation = new FormValidator(
  selectorsValidation,
  formLocation
);
profileValidation.enableValidation();
addLocationValidation.enableValidation();
