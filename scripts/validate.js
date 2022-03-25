const selectorsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_inactive",
  inputErrorClass: "form__input_errored",
  errorClass: "form__input-error_active",
};

//показываем сообщение об ошибках
function showInputError(formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`); //ищем блок ошибки по имени input

  errorElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
}

//скрывает сообщение об ошибках
function hideInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`); //ищем блок ошибки по имени input

  errorElement.textContent = "";
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
}

//проверка наличия невалидного input
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//деактивация кнопки отправки формы
function toggleButtonState(inputList, buttonElement, {inactiveButtonClass, ...otherSelectors}) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

//проверяем валидность формы и показываем/скрываем сообщение об ошибках
function checkInputValidity(formElement, inputElement, {...otherSelectors}) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, {...otherSelectors});
  } else {
    hideInputError(formElement, inputElement, {...otherSelectors});
  }
}

//навешивание валидаций на все input-ы
function setInputValidations(
  formElement,
  { inputSelector, submitButtonSelector, inactiveButtonClass, ...otherSelectors }
) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, {inactiveButtonClass, ...otherSelectors});

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, {...otherSelectors});
      toggleButtonState(inputList, buttonElement, {inactiveButtonClass, ...otherSelectors});
    });
  });
}

//валидация всех форм
function enableValidation({formSelector, ...otherSelectors}) {
  const formList = document.querySelectorAll(formSelector);
  formList.forEach((formElement) => {
    setInputValidations(formElement, {...otherSelectors});
  });
}

enableValidation(selectorsValidation);
