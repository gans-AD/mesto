const popupElement = document.querySelector('.popup'); // popup редактирования профиля
const popupOpenButtonElement = document.querySelector('.profile__edit-button'); // кнопка редактирования
const popupCloseButtonElement = document.querySelector('.edit-profile__cls-btn'); //кнопка закрытия окна редактировани
const popupSaveButtonElement = document.querySelector('.edit-profile__save-btn'); // кнопка сохранить
const editPopupNameElement = document.querySelector('.edit__field_name'); //имя пользователя в попапе
const editPopupActivity = document.querySelector('.edit__field_activity'); //род занятий пользователя в попапе
const profileName = document.querySelector('.profile__name'); //имя пользователя в профиле на странице
const profileActivity = document.querySelector('.profile__activity'); //род занятий пользователя в профиле на странице

//открывание окошка редактирования профиля
const openPopup = function () {
  popupElement.classList.add('popup_opened');
  fillPopup();
  console.log('open');
};

//закрывание окошка редактирования профиля
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
  console.log('close');
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
  closePopup();
};

//обработчики событий
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('submit', save);
