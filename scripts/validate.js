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
  const inputList = formElement.querySelectorAll(".form__input");
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {

      checkInputValidity(formElement, inputElement);
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
