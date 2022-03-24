const selectorsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_inactive",
  inputErrorClass: "form__input_errored",
  errorClass: "form__input-error_active",
};

//показываем сообщение об ошибках
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`); //ищем блок ошибки по имени input

  errorElement.textContent = errorMessage;
  inputElement.classList.add(selectorsValidation.inputErrorClass);
  errorElement.classList.add(selectorsValidation.errorClass);
}

//скрывает сообщение об ошибках
function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`); //ищем блок ошибки по имени input

  errorElement.textContent = "";
  inputElement.classList.remove(selectorsValidation.inputErrorClass);
  errorElement.classList.remove(selectorsValidation.errorClass);
}

//проверка наличия невалидного input
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//деактивация кнопки отправки формы
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectorsValidation.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(selectorsValidation.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

//проверяем валидность формы и показываем/скрываем сообщение об ошибках
function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

//навешивание валидаций на все input-ы
function setInputValidations(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(selectorsValidation.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    selectorsValidation.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

//валидация всех форм
function enableValidation(selecors) {
  const formList = document.querySelectorAll(selectorsValidation.formSelector);
  formList.forEach((formElement) => {
    setInputValidations(formElement);
  });
}

enableValidation(selectorsValidation);
