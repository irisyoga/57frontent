
const form = document.getElementById('add-book-form');
const list = document.getElementById('book-list');
const clearBtn = document.getElementById('clear-button');
const removeOneBtn = document.getElementById('remove-one-button');

let books = [
    { title: "Harry Potter", author: "Joanne Rowling" },
    { title: "Der Meister und Margarita", author: "Michail Bulgakow" }
];

function renderList() {
    list.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `"${book.title}" by ${book.author}`;
        list.appendChild(li);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = form.elements['book'].value.trim();
    const author = form.elements['author'].value.trim();

    if (!title || !author) return;

    const exists = books.some(book =>
        book.title.toLowerCase() === title.toLowerCase() &&
        book.author.toLowerCase() === author.toLowerCase()
    );

    if (exists) {
        alert("This book is already in the list!");
        return;
    }

    books.push({ title, author });
    renderList();
    form.reset();
});

clearBtn.addEventListener('click', function () {
    books = [];
    renderList();
});

removeOneBtn.addEventListener('click', function () {
    books.pop(); // удаляет последнюю книгу
    renderList();
});

renderList(); // начальная отрисовка