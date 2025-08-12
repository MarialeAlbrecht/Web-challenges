console.clear();

const form = document.querySelector('[data-js="form"]');
const firstname = document.querySelector("#first-name");

const ageInput = document.querySelector("#age");
const badnessInput = document.querySelector("#badness");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const ageBadnessSum = Number(ageInput.value) + Number(badnessInput.value);
  console.log(
    "The age-badness-sum of " + firstname.value + " is " + ageBadnessSum
  );

  event.target.reset();
  firstname.focus();
});
