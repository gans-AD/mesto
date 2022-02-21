const popupElement = document.querySelector('.popup'); // popup редактирования профиля
const popupOpenButtonElement = document.querySelector('.profile__edit-button'); // кнопка редактирования
const popupCloseButtonElement = document.querySelector('.edit-profile__cls-btn'); //кнопка закрытия окна редактировани
const popupSaveButtonElement = document.querySelector('.edit-profile__save-btn'); // кнопка сохранить
const editPopupNameElement = document.querySelector('.edit-profile__field_name'); //имя пользователя в попапе
const editPopupActivity = document.querySelector('.edit-profile__field_activity'); //род занятий пользователя в попапе
const profileName = document.querySelector('.profile__name'); //имя пользователя в профиле на странице
const profileActivity = document.querySelector('.profile__activity'); //род занятий пользователя в профиле на странице

//открывание(закрывание) окошка редактирования профиля
const togglePopup = function () {
  popupElement.classList.toggle('popup_opened');
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

//обработчики событий
popupOpenButtonElement.addEventListener('click', togglePopup);
popupCloseButtonElement.addEventListener('click', togglePopup);
popupElement.addEventListener('submit', save);
