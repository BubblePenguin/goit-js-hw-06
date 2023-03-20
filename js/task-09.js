function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector("span.color");

document
  .querySelector("button.change-color")
  .addEventListener("click", (event) => {
    const temp = getRandomHexColor();
    document.body.style.backgroundColor = temp;
    span.textContent = temp;
  });
