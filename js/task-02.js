const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// let element = document.querySelector("ul#ingredients");
// let ingredientEls = [];

// ingredients.forEach((ingredient) => {
//   let li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ingredientEls.push(li);
// });

// element.append(...ingredientEls);

document.querySelector("ul#ingredients").append(
  ...ingredients.map((ingredient) => {
    let li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  })
);
