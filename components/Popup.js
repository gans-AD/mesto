export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleClickClose = this._handleClickClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.setEventListeners();
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    this._popupElement.removeEventListener("click", this._handleClickClose);
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleClickClose(evt) {
    const targetElement = evt.target;

    if (
      targetElement === this._popupElement ||
      targetElement.classList.contains("close-btn")
    ) {
      this.close();
    }
  }

  setEventListeners() {
    //закрытие кликом мыши
    this._popupElement.addEventListener("click", this._handleClickClose);

    //закрытие кнопкой ESC
    document.addEventListener("keydown", this._handleEscClose);
  }
}
