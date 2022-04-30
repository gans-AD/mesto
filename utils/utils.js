const popupImage = document.querySelector(".popup_image");
const photoZoomable = document.querySelector(".image-popup__photo");
const photoZoomableTitle = document.querySelector(".image-popup__title");

//открытие popup
function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", ClosePopupKeyHandler);
}

//открытие popup просмотра фото
function openPhotoPopup(evt) {
  const photoTarget = evt.target;
  photoZoomable.src = photoTarget.src;
  photoZoomable.alt = photoTarget.alt;
  photoZoomableTitle.textContent = photoTarget.textContent;

  openPopup(popupImage);
}

//закрытие popup
function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", ClosePopupKeyHandler);
}

//закрытие popup клавишей Esc
function ClosePopupKeyHandler(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}

//навешивание обработчиков кнопки закрытия popup
function closePopupSetListeners() {
  const popupList = document.querySelectorAll(".popup");

  popupList.forEach((popupElement) => {
    //закрытие popup кликом мыши
    popupElement.addEventListener("click", (evt) => {
      const targetElement = evt.target;
      const currentTargetElement = evt.currentTarget;

      if (
        targetElement === currentTargetElement ||
        targetElement.classList.contains("close-btn")
      ) {
        closePopup(popupElement);
      }
    });
  });
}

closePopupSetListeners();

//экспортирование функций в другие модули
export { openPopup, closePopup, openPhotoPopup };
