function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");
const controls = document.querySelector("div#controls").children;

function createBoxes(amount) {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;

    arr.push(div);
  }

  boxes.replaceChildren(...arr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

controls[1].addEventListener("click", createBoxes(controls[0].value));
controls[2].addEventListener("click", destroyBoxes());
