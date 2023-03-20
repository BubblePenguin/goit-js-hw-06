document
  .querySelector("input#name-input")
  .addEventListener("input", (event) => {
    document.querySelector("span#name-output").textContent = event.target.value;
  });
