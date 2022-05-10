import {
  baseUrlMesto,
  myToken,
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
import { Api } from "../components/Api.js";
import "./index.css"; // подключение стилей css

//API сервера
const api = new Api({
  baseUrl: baseUrlMesto,
  headers: {
    authorization: myToken,
    "Content-Type": "application/json",
  },
});

//информация о пользовалете
const userInfo = new UserInfo({ usernameSelector, profileActivitySelector });

const popupPhoto = new PopupWithImage(popupImageSelector);
popupPhoto.setEventListeners();

//создание новой карточки
const createNewCard = (title, photo) => {
  const card = new Card(title, photo, placeTemplate, () =>
    popupPhoto.open(title, photo)
  );
  return card.createCard();
};

const popupProfile = new PopupWithForm(popupEditProfile, (data) => {
  api
    .editUserInfo(data)
    .then(() => {
      userInfo.setUserInfo(data);
      popupProfile.close();
      profileValidation.toggleButtonState();
    })
    .catch((err) => {
      console.log(err);
    });
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

//загружаем карточки с сервера
api
  .getInitialCards()
  .then((res) => {
    //исходные карточки
    const cardList = new Section(
      {
        items: res,
        renderer: (item) => {
          const card = createNewCard(item.name, item.link);
          cardList.addItem(card);
        },
      },
      cardListSelector
    );
    cardList.renderItems(); //отрисовываем карточки на странице
  })
  .catch((err) => {
    console.log(err);
  });

//загружаем информацию о пользователе с сервера
api
  .getUserInfo()
  .then((res) => {
    userInfo.setUserInfo({ username: res.name, activity: res.about });
  })
  .catch((err) => {
    console.log(err);
  });
