export class FormValidator {
  constructor(selectors, formElement) {
    this._selectorsValidation = selectors;
    this._form = formElement;
  }

  //валидация формы
  enableValidation() {
    this._setInputValidations();
  }

  //показываем сообщение об ошибках
  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._form.querySelector(
      `.${inputElement.name}-error`
    ); //ищем блок ошибки по имени input

    this._errorElement.textContent = errorMessage;
    inputElement.classList.add(this._selectorsValidation.inputErrorClass);
    this._errorElement.classList.add(this._selectorsValidation.errorClass);
  }

  //скрывает сообщение об ошибках
  _hideInputError(inputElement) {
    this._errorElement = this._form.querySelector(
      `.${inputElement.name}-error`
    ); //ищем блок ошибки по имени input

    this._errorElement.textContent = "";
    inputElement.classList.remove(this._selectorsValidation.inputErrorClass);
    this._errorElement.classList.remove(this._selectorsValidation.errorClass);
  }

  //деактивация кнопки отправки формы
  toggleButtonState() {
    if (!this._form.checkValidity()) {
      this._buttonElement.classList.add(
        this._selectorsValidation.inactiveButtonClass
      );
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(
        this._selectorsValidation.inactiveButtonClass
      );
      this._buttonElement.disabled = false;
    }
  }

  //проверяем валидность формы и показываем/скрываем сообщение об ошибках
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //навешивание валидаций на все input-ы
  _setInputValidations() {
    this._inputList = Array.from(
      this._form.querySelectorAll(this._selectorsValidation.inputSelector)
    );
    this._buttonElement = this._form.querySelector(
      this._selectorsValidation.submitButtonSelector
    );

    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }
}
