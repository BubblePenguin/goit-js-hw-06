const form = document.querySelector("form.login-form");
let data;

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  if (elements.email.value != 0 && elements.password.value != 0) {
    data = new FormData(event.target);
    data.forEach((x, y) => {
      console.log(`${y}:${x}`);
    });
    event.target.reset();
  } else alert("Всі поля повинні бути заповнені.");
}

form.addEventListener("submit", onFormSubmit);
