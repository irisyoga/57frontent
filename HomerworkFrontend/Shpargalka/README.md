📌 Таблица-шпаргалка по DOM в JavaScript

DOM — это способ взаимодействия JavaScript с HTML-страницей.

Он позволяет:

находить элементы,
изменять их содержимое и стиль,
добавлять и удалять узлы,
реагировать на действия пользователя.

Категория
 Метод / Свойство
  Описание   Пример
🔍 Поиск элементов
 getElementById(id) Находит элемент по id document.getElementById("header")
getElementsByClassName(class) Возвращает коллекцию по классу document.getElementsByClassName("box")
getElementsByTagName(tag) Возвращает коллекцию по тегу document.getElementsByTagName("p")
querySelector(sel) Первый элемент по CSS-селектору document.querySelector(".item")
querySelectorAll(sel) Все элементы по CSS-селектору document.querySelectorAll("li.active")
📝 Работа с содержимым
 textContent Устанавливает / получает только текст el.textContent = "Текст"
innerHTML Устанавливает / получает HTML el.innerHTML = "<b>Жирный</b>"
innerText Как textContent, но с учётом CSS el.innerText = "Видимый текст"
⚙️ Атрибуты 
getAttribute(name) Получает значение атрибута el.getAttribute("href")
setAttribute(name, value) Устанавливает значение атрибута el.setAttribute("id", "main")
removeAttribute(name) Удаляет атрибут el.removeAttribute("disabled")
🎨 Классы 
classList.add(class) Добавляет класс el.classList.add("active")
classList.remove(class) Удаляет класс el.classList.remove("hidden")
classList.toggle(class) Вкл/выкл класс el.classList.toggle("open")
classList.contains(class) Проверяет наличие класса el.classList.contains("btn")
🧱 Элементы
 createElement(tag) Создает новый элемент document.createElement("div")
appendChild(node) Добавляет в конец el.appendChild(newDiv)
append(...nodes) Добавляет строки/элементы el.append("Привет", newEl)
prepend(...) Добавляет в начало el.prepend(newEl)
remove() Удаляет элемент el.remove()
replaceWith(...) Заменяет элемент el.replaceWith(newNode)
⚡ События
 addEventListener(event, fn) Назначает обработчик события btn.addEventListener("click", fn)
removeEventListener(...) Удаляет обработчик el.removeEventListener("click", fn)
