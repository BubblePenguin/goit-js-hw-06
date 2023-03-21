const form = document.querySelector("form.login-form");
const data = {};

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  if (elements.email.value != 0 && elements.password.value != 0) {
    data.email = elements.email.value;
    data.password = elements.password.value;
    console.log(data);

    event.target.reset();
  } else alert("Всі поля повинні бути заповнені.");
}

form.addEventListener("submit", onFormSubmit);
