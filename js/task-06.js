const inputField = document.querySelector("[data-length='6']");

inputField.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === +inputField.dataset.length) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
 
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
});
