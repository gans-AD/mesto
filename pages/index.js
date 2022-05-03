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

//открытие popup просмотра фото
const openPhotoPopup = (evt) => {
  const popupPhoto = new PopupWithImage(popupImageSelector);
  popupPhoto.open(evt);
};

//исходные карточки
const defaultCardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        placeTemplate,
        openPhotoPopup
      );
      const cardElement = card.createCard();
      defaultCardsList.addItem(cardElement);
    },
  },
  cardListSelector
);

const userInfo = new UserInfo({ usernameSelector, profileActivitySelector });

const popupProfile = new PopupWithForm(popupEditProfile, (data) => {
  userInfo.setUserInfo(data);
  popupProfile.close();
});

const popupNewLocation = new PopupWithForm(popupNewLocationSelector, (data) => {
  const newCard = new Card(
    data.locationName,
    data.locationUrl,
    placeTemplate,
    openPhotoPopup
  );

  const newCardElement = newCard.createCard();
  defaultCardsList.addItem(newCardElement);
  popupNewLocation.close();
  addLocationValidation.toggleButtonState();
});

defaultCardsList.renderItems(); //загружаем карточки на страницу

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
