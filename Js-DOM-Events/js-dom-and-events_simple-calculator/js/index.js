console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.
const addbutton = document.querySelector('[data-js="add"]');
const subtracbutton = document.querySelector('[data-js="subtract"]');
const multiplybutton = document.querySelector('[data-js="multiply"]');
const dividebutton = document.querySelector('[data-js="divide"]');
const exponentbutton = document.querySelector('[data-js="exponent"]');
const modulobutton = document.querySelector('[data-js="modulo"]');

const increasefive = document.querySelector('[data-js="increase-by-five"]');
const increaseone = document.querySelector('[data-js="increase-by-one"]');
const decreaseone = document.querySelector('[data-js="decrease-by-one"]');
const decreasefive = document.querySelector('[data-js="decrease-by-five"]');
const multiplytwo = document.querySelector('[data-js="multiply-by-two"]');
const dividetwo = document.querySelector('[data-js="divide-by-two"]');

// --v-- write your code here --v--

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

addbutton.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log("Addition:", result);
});

subtracbutton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log("Subtraction:", result);
});

multiplybutton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log("Multiplication:", result);
});

dividebutton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log("Division:", result);
});

exponentbutton.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log("Exponentiation:", result);
});

modulobutton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log("Modulo:", result);
});

multiplytwo.addEventListener("click", () => {
  let value = operand1 * 2;
  console.log(value);
});

dividetwo.addEventListener("click", () => {
  let value = operand1 / 2;
  console.log(value);
});

// --v-- write your code here --v--

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

increasefive.addEventListener("click", () => {
  let value = operand1 + 5;
  console.log(value);
});

increaseone.addEventListener("click", () => {
  let value = operand1 + 1;
  console.log(value);
});

decreaseoneone.addEventListener("click", () => {
  let value = operand1 - 1;
  console.log(value);
});

decreasefive.addEventListener("click", () => {
  let value = operand1 - 5;
  console.log(value);
});
// --v-- write your code here --v--

// --^-- write your code here --^--
