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
import { Api } from "../components/Api.js"
import "./index.css"; // подключение стилей css

//запрос на сервер
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: '2ab4ce65-b376-4883-b59c-64454531d09d',
    'Content-Type': 'application/json'
  }}
)

api.getInitialCards()
  .then(res => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err);
  });

const popupPhoto = new PopupWithImage(popupImageSelector);
popupPhoto.setEventListeners();

//создание новой карточки
const createNewCard = (title, photo) => {
  const card = new Card(title, photo, placeTemplate, ()=> popupPhoto.open(title, photo));
  return card.createCard();
};

//исходные карточки
const cardList = new Section(
  {
    items: api.getInitialCards(),
    renderer: (item) => {
      const card = createNewCard(item.name, item.link);
      cardList.addItem(card);
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
