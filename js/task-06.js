document
  .querySelector("input#validation-input")
  .addEventListener("blur", (event) => {
    const input = event.target;

    if (input.value.length > input.dataset.length) {
      input.classList.remove("valid");
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
      input.classList.add("valid");
    }
  });
