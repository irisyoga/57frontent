
/*Создайте переменную myNumber и присвойте ей результат выражения: деление числа 100 на остаток от деления 25 на 3. Выведите значение myNumber в консоль. */
let myNumber = 100 / (25 % 3);
console.log(myNumber);
/*Создайте переменную myString и присвойте ей значение, которое является результатом конкатенации следующих строк: "Hello, ", "world", "!", и числа 2024. Выведите значение myString в консоль.*/

let myString =  "Hello, " + "world" + "!" + "2024.";
console.log(myString);
/*Создайте переменную isHuman и присвойте ей результат сравнения числа 42 со строкой 42. Результатом должно стать true. Подумайте какой оператор сравнения вы будете использовать. */
let isHuman = 42 == "42";
console.log(isHuman);
/*Создайте переменную myNumber и присвойте ей результат преобразования строки "123smth" в число. Выведите значение myNumber в консоль. */
let myNumber1 = parseInt("123smth");
console.log(myNumber1);
/*Задание 1
Создайте переменные age и hasPassport. Присвойте age значение 18, а hasPassport — true.

С помощью тернарного оператора создайте переменную canTravel. В ней должно храниться строковое сообщение:

если age больше или равно 18 и hasPassport равно true, то: "Вы можете путешествовать ✈️"
иначе: "Путешествие невозможно ❌"
Выведите значение canTravel в консоль.  */
let age = 18;
let hasPassport = true;
console.log(hasPassport);

let canTravel = (age >= 18 &&  hasPassport) ? "Вы можете путешествовать ✈️"
  : "Путешествие невозможно ❌";
  console.log(canTravel);
/*Задание 2
Создайте переменную inputString и присвойте ей значение "500€".

С помощью функции parseInt() преобразуйте строку в число и сохраните результат в переменную price.

Выведите значение price в консоль. */
let inputString = "500€";
let price = parseInt("500€");
console.log(price);
/*Задание 3
Создайте переменную randomNumber, в которой будет случайное целое число от 1 до 50.

Выведите randomNumber в консоль.

Проверьте, является ли число чётным (делится на 2 без остатка). Создайте переменную isEven, в которой будет результат сравнения.

Выведите isEven в консоль. */
let randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);

let isEven = randomNumber % 2 === 0;
console.log(isEven);





 