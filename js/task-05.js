const inputField = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

console.log(inputField.value);

inputField.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonimous";
  }
});
