import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._inputList = this._popupElement.querySelectorAll("input");
  }

  _getInputValues() {
    this._inputValues = {};

    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", this._submit);
  }

  close() {
    super.close();
    this._popupElement.reset();
  }
}
