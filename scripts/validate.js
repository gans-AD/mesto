//показываем сообщение об ошибках
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`); //ищем блок ошибки по имени input

  errorElement.textContent = errorMessage;
  inputElement.classList.add("form__input_errored");
  errorElement.classList.add("form__input-error_active");
};

//скрывает сообщение об ошибках
function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`); //ищем блок ошибки по имени input

  errorElement.textContent = "";
  inputElement.classList.remove("form__input_errored");
  errorElement.classList.remove("form__input-error_active");

};

//проверка наличия невалидного input
function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//деактивация кнопки отправки формы
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__save-btn_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("form__save-btn_inactive");
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
};

//навешивание валидаций на все input-ы
function setInputValidations(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__save-btn");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//валидация всех форм
function enableValidation() {
  const formList = document.querySelectorAll(".form");
  formList.forEach((formElement) => {

    setInputValidations(formElement);
  });
};

enableValidation();
