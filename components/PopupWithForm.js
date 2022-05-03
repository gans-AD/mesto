import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._inputList = this._popupElement.querySelectorAll("input");
    this._form = this._popupElement.querySelector(".form");
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  //собирает данные из input формы
  _getInputValues() {
    this._inputValues = {};

    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const newData = this._getInputValues();
    this._submit(newData);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", this._handleSubmit);
  }

  close() {
    super.close();
    this._popupElement.removeEventListener("submit", this._handleSubmit);
    this._form.reset();
  }
}
