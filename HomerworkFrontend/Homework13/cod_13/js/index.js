const form = document.getElementById("add-book-form");
const booksList = document.getElementById("books-list");
const clearBtn = document.getElementById("clear-list");

let books = []; //для хранения значений Держим все введённые книги в памяти (объекты {title, author}).

//Сначала удаляем старые <li>, чтобы не копить дубликаты.
//Затем для каждого объекта из books создаём элемент списка и добавляем его в DOM.

function renderBooks() {
   // 1. Чистим список <ul>
  while (booksList.firstChild) {
    booksList.removeChild(booksList.firstChild);
  }
  // 2. Строим список заново
  books.forEach((b) => {
    const li = document.createElement("li"); //<li><li>
    li.textContent = `"${b.title}" by ${b.author}`; //<li>"Lord" by Tolkien<li>
    booksList.appendChild(li);
  });
}
//Проверяем, есть ли такая книга
//Array.prototype.some возвращает true, как только найдёт совпадение.
//Сравнение независимое от регистра (toLowerCase()).

function hasBook(book) {
  return books.some(
    (b) =>
      b.title.toLowerCase() === book.title.toLowerCase() &&
      b.author.toLowerCase() === book.author.toLowerCase()
  );
}
 //Очистка списка
function clearBooks() {
  books = [];   // // сбрасываем «базу»
  renderBooks(); // вызываем чтобы увидеть, что что-то изменилось (увидим пустой список)
}

//Обработчик отправки формы
function handleSubmit(event) {
  event.preventDefault();   // блокируем стандартный submit+перезагрузку
  console.log(event.target.author.value);
  console.log(event.target.title.value);

  const newBook = {
    //trim() убирает случайные пробелы в начале/конце.
    author: event.target.author.value.trim(),
    title: event.target.title.value.trim(),
  };

  if (hasBook(newBook)) {
    alert("Error: Book with this title and author already exists");
  } else {
    books.push(newBook);    // сохраняем
    event.target.title.value = "";  // чистим поля формы
    event.target.author.value = "";
    //event.target — та же форма (<form>), у неё есть вложенные элементы с именами author, title.
  }

  console.log(books);
  renderBooks();  // что‑то поменялось? обновляем DOM
}

//Назначение слушателей событий
form.addEventListener("submit", handleSubmit);
clearBtn.addEventListener("click", clearBooks);
