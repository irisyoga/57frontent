//Синхронность и асинхронность в JavaScript
//Синхронный код выполняется последовательно, асинхронный - может выполняться позже, не блокируя основной поток выполнения.
let x = 12;
console.log(x);

x = 10;
console.log(x);
let myName;

// Асинхронный код

setTimeout(() => {
  console.log("Hello 0 sec");
  myName = "John";
}, 0); // Выполнится в конце очереди событий

console.log(myName); // undefined, так как асинхронный код еще не выполнен

// Асинхронный код с задержкой
//timers
setTimeout(() => {
  console.log("Hello 3 sec");
  console.log("Name: " + myName); // "John", так как асинхронный код уже выполнен
}, 3000); 

console.log("Hello, no timer");

//Напишите функцию lateHappyBirthday, которая будет выводить "Happy Birthday!" через 6 секунд
//и сделайте вызов функции lateHappyBirthday
//После поздравления вызовите функцию thankYou, которая будет выводить "Thank you!" через 6 секунд после поздравления.


function lateHappyBirthday() {

  setTimeout(() => {
    console.log("Happy Birthday!");
    thankYou(); // Вызов функции thankYou после поздравления
  }, 6000);
  
}
// Вызов функции lateHappyBirthday
// Функция будет выполнена через 6 секунд после вызова
lateHappyBirthday();

function thankYou() {

  setTimeout(() => {
    console.log("Thank you!");
  }, 6000);

}
