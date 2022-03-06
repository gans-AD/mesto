const popupElement = document.querySelectorAll('.popup'); // popup
const popupEditProfile = document.querySelector('.form_edit-profile').parentElement;
const popupNewLocation = document.querySelector('.form_new-location').parentElement;
const editButtonElement = document.querySelector('.profile__edit-button'); // кнопка редактирования
const addButtonElement = document.querySelector('.profile__add-button');
const popupCloseButtonElement = document.querySelector('.form__cls-btn'); //кнопка закрытия окна редактировани
const popupSaveButtonElement = document.querySelector('.form__save-btn'); // кнопка сохранить
const editPopupNameElement = document.querySelector('.form__field_name'); //имя пользователя в попапе
const editPopupActivity = document.querySelector('.form__field_activity'); //род занятий пользователя в попапе
const profileName = document.querySelector('.profile__name'); //имя пользователя в профиле на странице
const profileActivity = document.querySelector('.profile__activity'); //род занятий пользователя в профиле на странице
const placesElement = document.querySelector('.places');

//открывание(закрывание) окошка редактирования профиля
const togglePopup = function (element) {
  element.classList.toggle('popup_opened');
  fillPopup();
};

//заполнение popup данными
const fillPopup = function () {
  editPopupNameElement.value = profileName.innerText;
  editPopupActivity.value = profileActivity.innerText;
};

//кнопка сохранить
const save = function (evt) {
  evt.preventDefault();
  profileName.innerText = editPopupNameElement.value;
  profileActivity.innerText = editPopupActivity.value;
  togglePopup();
};

//открытие popup редактирования профиля
editButtonElement.addEventListener('click', () => {
  togglePopup(popupEditProfile);
});

//отрытие popup добавления фотографии
addButtonElement.addEventListener('click', () => {
  togglePopup(popupNewLocation);
})

//кнопка закрыть
popupElement.forEach(element => {
  element.addEventListener('click', (evt) => {
    togglePopup(evt.target.closest('.popup'));
  });
});

//кнопка сохранить
popupEditProfile.addEventListener('submit', save);

//кнопка like
placesElement.addEventListener('click', (evt) => {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('like_activated');
});

