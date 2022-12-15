function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = bodyEl.querySelector(".change-color");
const colorNameSign = bodyEl.querySelector(".color");

buttonEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorNameSign.textContent = color;
});
