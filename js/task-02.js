const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listEl = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  return listItem;
})


list.append(...listEl);
