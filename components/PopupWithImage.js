export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoElement = this._popupElement.querySelector('.image-popup__photo');
    this._photoTitle = this._popupElement.querySelector('.image-popup__title');
  }

  open(evt) {
    const photoTarget = evt.target;
    this._photoElement.src = photoTarget.src;
    this._photoElement.alt = photoTarget.alt;
    this._photoTitle.textContent = photoTarget.textContent;
    super.open();
  }
}
