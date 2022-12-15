function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputField = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  console.log(inputField.value);
  createBoxes(inputField.value);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let size = 30;
    let counter = i * 10;

    const markup = `<div style='background-color:${getRandomHexColor()};width:${
      size + counter
    }px;height:${size + counter}px' class=box></div>`;
    boxContainer.insertAdjacentHTML("beforeend", markup);
  }
}

function destroyBoxes() {
  const boxes = boxContainer.querySelectorAll(".box");
  boxes.forEach((box) => box.remove());
}
