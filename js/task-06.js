const inputField = document.querySelector("[data-length='6']");

inputField.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    inputField.classList.add("valid");
  } else {
    inputField.classList.add("invalid");
  }
});
