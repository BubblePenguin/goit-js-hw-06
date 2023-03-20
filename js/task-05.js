document
  .querySelector("input#name-input")
  .addEventListener("change", (event) => {
    document.querySelector("span#name-output").textContent = event.target.value;
  });
