
const authorEl = document.getElementById("author");
const yearEl = document.getElementById("year");
const priceEl = document.getElementById("price");
const titleEl = document.getElementById("title");
const tagsEl = document.getElementById("tags");

fetch("https://alisherkhamidov.github.io/books-api/my-fav-book.json")
  .then((res) => res.json())
  .then((book) => {
    console.log(book);
    // деструктуризация
    const { title, author, year, price, tags, currency } = book;
    authorEl.textContent += author;
    titleEl.textContent += title;
    yearEl.textContent += year;
    priceEl.textContent += price + " " + currency;

    tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tagsEl.appendChild(li);
    });
  });