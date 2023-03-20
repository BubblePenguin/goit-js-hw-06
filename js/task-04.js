const counterDiv = document.querySelector("#counter");
let counterValue = 0;

const btnDec = counterDiv.querySelectorAll("button")[0];
const btnInc = counterDiv.querySelectorAll("button")[1];

btnDec.addEventListener("click", () => {
  counterValue--;
  counterDiv.querySelector("#value").textContent = counterValue;
});

btnInc.addEventListener("click", () => {
  counterValue++;
  counterDiv.querySelector("#value").textContent = counterValue;
});
