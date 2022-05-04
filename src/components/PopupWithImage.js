import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoElement = this._popupElement.querySelector('.image-popup__photo');
    this._photoTitle = this._popupElement.querySelector('.image-popup__title');
  }

  open(title, photo) {
    this._photoElement.src = photo;
    this._photoElement.alt = title;
    this._photoTitle.textContent = title;
    super.open();
  }
}
