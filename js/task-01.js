let liItemEls = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${liItemEls.length}\n\n`);

liItemEls.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelector("ul").children.length}\n\n`);
});
