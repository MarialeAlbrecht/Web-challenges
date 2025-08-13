console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
let title = "7 wonder";
let author = "Pepe";
let rating = 2.2;
let sales = 8;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
function booksInfo(title, author, rating, sales) {
  console.log(
    "Title: " + title,
    "Author: " + author,
    "Rating: " + rating,
    "Sales: " + sales
  );
}
booksInfo("The Lord of the Javascript", "Mario", 4.2, 120);
booksInfo("The Lord of the Javascript", "Mario", 6, 150);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData(title, author, rating, sales) {
  console.log(
    "Title: " + title,
    "Author: " + author,
    "Rating: " + rating,
    "Sales: " + sales
  );
}

title = "The Lord of the Javascript";
author = "Mario";
rating = 10;
sales = 220;

logBookData(title, author, rating, sales);

rating++ && sales++;
logBookData(title, author, rating, sales);

rating++ && sales++;
logBookData(title, author, rating, sales);

// --^-- write your code here --^--
