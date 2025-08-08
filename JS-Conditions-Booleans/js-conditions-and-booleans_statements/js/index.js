console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

let receivedPassword = Math.random().toString(36);

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const max = 10;
let number = Math.floor(Math.random() * max);
console.log(number);

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Part 3: Hotdogs
const max1 = 1e12;
const numberOfHotdogs = Math.floor(Math.random() * max1);
let price;

switch (true) {
  case numberOfHotdogs < 5:
    price = 2 * numberOfHotdogs;
    break;
  case numberOfHotdogs >= 5 && numberOfHotdogs < 100:
    price = 1.5 * numberOfHotdogs;
    break;
  case numberOfHotdogs >= 100 && numberOfHotdogs < 1000000:
    price = number;
    break;
  case numberOfHotdogs >= 1000000:
    price = 0.1 * numberOfHotdogs;
    break;
}

console.log("The price for ", numberOfHotdogs, " hotdogs is", price);

// Part 4: Daytime

const currentHour = 20;

let statement = "";

if (currentHour < 17) {
  statement = "Still need to learn ...";
} else {
  statement = "Partytime!!!";
}

console.log(statement);

// Part 5: Greeting

const userName = "Archibald";
let coach = "";

let greeting;

if (userName === coach) {
  greeting = "Hello Coach";
} else {
  greeting = "Hello " + userName + " enter your code here:";
}

console.log(greeting);
