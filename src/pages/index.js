import {
  baseUrlMesto,
  myToken,
  popupEditProfile,
  popupNewLocationSelector,
  popupDelCardSelector,
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
import { PopupWithConfirm } from "../components/PopupWithConfirm.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from "../components/Api.js";
import "./index.css"; // подключение стилей css

let deletedCard = null; //ссылка на удаляемую карточку

//API сервера
const api = new Api({
  baseUrl: baseUrlMesto,
  headers: {
    authorization: myToken,
    "Content-Type": "application/json",
  },
});

//загружаем информацию о пользователе с сервера
api
  .getUserInfo()
  .then((res) => {
    userInfo.setUserInfo({
      username: res.name,
      activity: res.about,
      _id: res._id,
    });
  })
  .catch((err) => {
    console.log(err);
  });

//создание секции с карточками
const cardList = new Section(
  {
    items: [],
    renderer: (item) => {
      const card = createNewCard(item);
      cardList.addItem(card);
    },
  },
  cardListSelector
);

//информация о пользовалете
const userInfo = new UserInfo({ usernameSelector, profileActivitySelector });

const popupPhoto = new PopupWithImage(popupImageSelector);
popupPhoto.setEventListeners();

//попап удаления карточки
const popupDeleteCard = new PopupWithConfirm(popupDelCardSelector, (cardId) => {
  api
    .deleteCard(cardId)
    .then(() => deletedCard.deleteCard())
    .then(() => (deletedCard = null))
    .then(() => popupDeleteCard.close())
    .catch((err) => {
      console.log(err);
    });
});
popupDeleteCard.setEventListeners();

//создание новой карточки
const createNewCard = (data) => {
  const card = new Card(data, placeTemplate, userInfo._id, {
    handleCardClick: () => popupPhoto.open(data.title, data.link),
    handleDeleteCard: () => {
      deletedCard = card;
      popupDeleteCard.open(data._id);
    },
  });
  return card.createCard();
};

//попап редактирования профиля
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

//попап добавления карточки
const popupNewLocation = new PopupWithForm(popupNewLocationSelector, (data) => {
  api
    .addCard(data)
    .then((res) => {
      const newCard = createNewCard(res);
      cardList.addItem(newCard);
      popupNewLocation.close();
      addLocationValidation.toggleButtonState();
    })
    .catch((err) => {
      console.log(err);
    });
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
    cardList.renderItems(res); //отрисовываем карточки на странице
  })
  .catch((err) => {
    console.log(err);
  });
