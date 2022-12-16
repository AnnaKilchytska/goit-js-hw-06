const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formInputData = {};

  if (email !== "" && password !== "") {
    formInputData.email = email;
    formInputData.password = password;
    formEl.reset();
    console.log(formInputData);
  } else {
    alert("Всі поля мають бути заповнені!");
  }
});
