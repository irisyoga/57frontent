
// * 1. находим интерактивные элементы и кладем в переменные

const form = document.querySelector('#form-todo');
const ul = document.querySelector('#list-todo');

// * 2. создаем функцию, которая будет добавлять новый элемент в список


// * 3. вызываем функцию




// * 4. дальнейшие операции с кодом 
//например работа со слушателями событий


//обрабатываем событие формы
form.addEventListener('submit', (event) => {
    event,preventDefault(); // предотвращаем перезагрузку страницы
    console.log('submit!');
})









