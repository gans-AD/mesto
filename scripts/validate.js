const formProfile = documents.forms.profile;
const formProfileError = formProfile.querySelector(`.${formProfile.id}-error`);

function showError (input, errorMessage)  {
  input.classList.add("form__field_type_error");
  formProfileError.textContent = errorMessage;
};

function hideError (input)  {
  input.classList.remove("form__field_type_error");
};

