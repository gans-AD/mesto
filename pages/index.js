import {
  initialCards,
  popupEditProfile,
  popupNewLocation,
  buttonEditElement,
  buttonAddElement,
  popupEditNameElement,
  popupEditActivity,
  formLocation,
  formProfile,
  locationAddNameInput,
  locationAddLinkInput,
  profileName,
  profileActivity,
  cardListSelector,
  placeTemplate,
  selectorsValidation,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { openPopup, closePopup } from "../utils/utils.js";

//-----------------------------------------------

const defaultCardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, placeTemplate);
      const cardElement = card.createCard();
      defaultCardsList.addItem(cardElement);
    },
  },
  cardListSelector
);

defaultCardsList.renderItems();//загружаем карточки на страницу

//-----------------------------------------------

function addNewCard(evt) {
  evt.preventDefault();
  const objectNewLocation = {};
  objectNewLocation.name = locationAddNameInput.value;
  objectNewLocation.link = locationAddLinkInput.value;
  addCard(objectNewLocation, cardListSelector);
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
const addLocationValidation = new FormValidator(
  selectorsValidation,
  formLocation
);
profileValidation.enableValidation();
addLocationValidation.enableValidation();
