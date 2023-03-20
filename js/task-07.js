document
  .querySelector("input#font-size-control")
  .addEventListener("change", (event) => {
    document.querySelector(
      "span#text"
    ).style.fontSize = `${event.target.value}px`;
  });
