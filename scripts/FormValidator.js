export class FormValidator {
  constructor(selectors, formElement) {
    this._selectorsValidation = selectors;
    this._form = formElement;
  }

  //валидация формы
  enableValidation() {
    this._setInputValidations(this._form, this._selectorsValidation);
  }

  //показываем сообщение об ошибках
  _showInputError(
    formElement,
    inputElement,
    errorMessage,
    { inputErrorClass, errorClass }
  ) {
    const errorElement = formElement.querySelector(
      `.${inputElement.name}-error`
    ); //ищем блок ошибки по имени input

    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
  }

  //скрывает сообщение об ошибках
  _hideInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
    const errorElement = formElement.querySelector(
      `.${inputElement.name}-error`
    ); //ищем блок ошибки по имени input

    errorElement.textContent = "";
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
  }

  //проверка наличия невалидного input
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //деактивация кнопки отправки формы
  _toggleButtonState(
    inputList,
    buttonElement,
    { inactiveButtonClass, ...otherSelectors }
  ) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  //проверяем валидность формы и показываем/скрываем сообщение об ошибках
  _checkInputValidity(formElement, inputElement, { ...otherSelectors }) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        { ...otherSelectors }
      );
    } else {
      this._hideInputError(formElement, inputElement, { ...otherSelectors });
    }
  }

  //навешивание валидаций на все input-ы
  _setInputValidations(
    formElement,
    {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      ...otherSelectors
    }
  ) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement, {
      inactiveButtonClass,
      ...otherSelectors,
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, {
          ...otherSelectors,
        });
        this._toggleButtonState(inputList, buttonElement, {
          inactiveButtonClass,
          ...otherSelectors,
        });
      });
    });
  }
}
