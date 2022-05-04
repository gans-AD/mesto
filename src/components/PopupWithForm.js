import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popupElement.querySelector(".form");
    this._inputList = this._form.querySelectorAll("input");
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  //собирает данные из input формы
  _getInputValues() {
    const inputValues = {};

    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
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
    this._form.reset();
    super.close();
  }
}
