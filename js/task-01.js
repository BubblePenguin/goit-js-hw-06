let ulEl = document.querySelector("ul#categories");
let liItemEls = ulEl.querySelectorAll("li.item");

console.log(`Number of categories: ${liItemEls.length}\n\n`);

liItemEls.forEach((item) => {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Elements: ${item.children[1].children.length}\n\n`);
});
