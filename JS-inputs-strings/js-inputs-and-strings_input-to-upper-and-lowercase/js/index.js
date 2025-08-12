console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

const button2 = document.querySelector('[data-js="button-uppercase2"]');
button2.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});
