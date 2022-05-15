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
  formEditAvatar,
  cardListSelector,
  placeTemplate,
  selectorsValidation,
  usernameSelector,
  profileActivitySelector,
  avatarSelector,
  popupImageSelector,
  popupAvatarSelector,
  buttonEditAvatar,
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

//загружаем информацию о пользователе с сервера и отрисовываем карточки на странице
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo({
      username: userData.name,
      activity: userData.about,
      _id: userData._id,
      avatar: userData.avatar,
    });
    cardList.renderItems(cards); //отрисовываем карточки на странице
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
const userInfo = new UserInfo({
  usernameSelector,
  profileActivitySelector,
  avatarSelector,
});

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
    handleLikeButton: () => {
      if (!card.likeStatus()) {
        api
          .putLike(data._id)
          .then((res) => {
            card.changeLike(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .deleteLike(data._id)
          .then((res) => {
            card.changeLike(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  });
  return card.createCard();
};

//попап редактирования профиля
const popupProfile = new PopupWithForm(popupEditProfile, (data) => {
  popupProfile.renderLoading(true);
  api
    .editUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo({
        username: res.name,
        activity: res.about,
        _id: res._id,
        avatar: res.avatar,
      });
      popupProfile.close();
      profileValidation.toggleButtonState();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    });
});
popupProfile.setEventListeners();

//попап добавления карточки
const popupNewLocation = new PopupWithForm(popupNewLocationSelector, (data) => {
  popupNewLocation.renderLoading(true);
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
    })
    .finally(() => {
      popupNewLocation.renderLoading(false);
    });
});
popupNewLocation.setEventListeners();

//попап редактирования аватарки
const popupAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  popupAvatar.renderLoading(true);
  api
    .editAvatar(data.avatarUrl)
    .then((res) => {
      userInfo.setUserInfo({
        username: res.name,
        activity: res.about,
        _id: res._id,
        avatar: res.avatar,
      });
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
});
popupAvatar.setEventListeners();

//----- обработчики событий -----
//открытие popup редактирования профиля
buttonEditElement.addEventListener("click", () => {
  profileValidation.resetValidation();
  const profileData = userInfo.getUserInfo();
  inputNameElement.value = profileData.username;
  inputActivityElement.value = profileData.activity;
  popupProfile.open();
});

//отрытие popup добавления фотографии
buttonAddElement.addEventListener("click", () => {
  addLocationValidation.resetValidation();
  popupNewLocation.open();
});

buttonEditAvatar.addEventListener("click", () => {
  editAvatarValidations.resetValidation();
  popupAvatar.open();
});

// -------------------------------------

const profileValidation = new FormValidator(selectorsValidation, formProfile);
const addLocationValidation = new FormValidator(
  selectorsValidation,
  formLocation
);
const editAvatarValidations = new FormValidator(
  selectorsValidation,
  formEditAvatar
);

profileValidation.enableValidation();
addLocationValidation.enableValidation();
editAvatarValidations.enableValidation();
