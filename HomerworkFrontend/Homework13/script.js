// * 1. находим интерактивные элементы и кладем в переменные

const form = document.querySelector("#form-todo");
const ul = document.querySelector("#list-todo");

// массив под список задач
let taskList = [];

// * 2. объявление функции

// * 3. вызов функции

//function checkTask(task) {
// проверяем, что задача не пустая
// if (!task.where || !task.what) {
// alert('Пожалуйста, заполните все поля задачи.');
// return false;
//}
//return true;
//}

// * 4. дальнейшие операции с кодом
// например работа со слушателями событий

// обрабатываем событие submit формы

form.addEventListener("submit", (event) => {
  // убираем перезагрузку формы по умолчанию
  event.preventDefault();

  // забираем данные из input уточняя name
  let task = {
    where: event.target.where.value.toLowerCase(),
    what: event.target.what.value.toLowerCase(),
  };

  //чистим input от введенных данных
  event.target.where.value = "";
  event.target.what.value = "";

  //делаем проверку есть ли элемент в массиве
  const check = taskList.find(
    (el) => el.what === task.what && el.where === task.where
  );
  if (check) {
    alert("Такая задача уже существует!");
  } else {
    // добавляем задачу в массив
    taskList.push(task);
    // создаем новый элемент списка
    const li = document.createElement("li");

    //добавляем обработчик с переключателем стилей
    li.addEventListener("click", (event) => {
      if (event.target.className === "done") {
        event.target.className = "";
      } else {
        event.target.className = "done";
      }
    });

    // добавляем текст в элемент списка
    li.textContent = `Задача: ${task.what}, место: ${task.where}`;
    // добавляем элемент списка в ul
    ul.append(li);
    console.log(task);
  }
});
