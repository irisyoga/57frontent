
// Остановить интервал, если нужно

// Пример Promise - асинхронная операция с таймаутом
// Promise обещание - это объект, который представляет собой результат асинхронной операции.
// fulfilled выполнен успешно -
// rejected отвергнутый -
// pending ожидающий -

const burgerPromise = new Promise(function (res, rej) {
  setTimeout(() => {}
    if (getRandom()) {
     res("Burger");
    } else {
    rej(new Error("Error: No bread!"));
  }, 5000);
});

console.log(burgerPromise); // Promise { <pending> }

 setTimeout(() => {
  console.log(burgerPromise);
 }, 6000);


// then тогда- можем получить значение без таймера -> fulfilled
// catch ловить - обработать ошибку - в случае reject -> rejected

// Раскрыть Promise без сет таймаут
burgerPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err);
  });

// then - это метод, который принимает два аргумента: функцию для обработки успешного выполнения и функцию для обработки ошибки.
// catch - это метод, который принимает одну функцию для обработки ошибки.

function getRandom() {
    return Math.floor(Math.random() * 2);
}
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());


