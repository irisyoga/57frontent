const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const yearEl = document.getElementById("year");

fetch("https://irisyoga.github.io/my-favorite-book/book.json")
  .then((res) => res.json())
  .then((book) => {
    console.log(book); // проверяем в консоли, что пришло
    titleEl.textContent = book.title;
    authorEl.textContent = `by ${book.author}`;
    yearEl.textContent = `(${book.year})`;
  });
