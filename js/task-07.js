const inputRange = document.querySelector("#font-size-control");
const controlText = document.querySelector("#text");

inputRange.addEventListener("input", (event) => {
  controlText.style.fontSize = `${event.currentTarget.value}px`;
});
