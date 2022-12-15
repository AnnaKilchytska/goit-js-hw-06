const categories = document.querySelectorAll(".item");
const categoryName = document.querySelectorAll("h2");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category, i) => {
  console.log(`Category: ${categoryName[i].textContent}`);

  const elements = category.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
