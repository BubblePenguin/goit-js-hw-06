const form = document.querySelector("form.login-form");
let data = {};

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  if (elements[0].value != 0 && elements[1].value != 0) {
    data.email = elements[0].value;
    data.password = elements[1].value;
    console.log(data);
    event.target.reset();
  } else alert("Всі поля повинні бути заповнені.");
}

form.addEventListener("submit", onFormSubmit);
