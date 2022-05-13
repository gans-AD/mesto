import { Popup } from "./Popup";

export class PopupWithConfirm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
  }

  open(cardId) {
    this._cardId = cardId;
    super.open();
  }

  _handleSubmit(evt) {}

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submit(this._cardId);
    });
  }
}
