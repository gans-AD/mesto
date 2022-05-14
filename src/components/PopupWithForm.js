import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popupElement.querySelector(".form");
    this._inputList = this._form.querySelectorAll("input");
    this._submitButton = this._form.querySelector(".form__save-btn");
    this._handleSubmit = this._handleSubmit.bind(this);
    this._defaultButtonText = this._submitButton.textContent;
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

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение ...";
    } else {
      this._submitButton.textContent = this._defaultButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", this._handleSubmit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
