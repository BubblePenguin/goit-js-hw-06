const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");
span.style.fontSize = `${input.value}px`;

input.addEventListener("input", (event) => {
  span.style.fontSize = `${event.target.value}px`;
});
