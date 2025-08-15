console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const element of programmingLanguages) {
  const language = document.createElement("li");
  language.textContent = element;
  console.log(language);
  ol.append(language);
}

// --^-- write or modify code above this line --^--
