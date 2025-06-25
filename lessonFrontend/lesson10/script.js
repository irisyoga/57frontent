// ! arrays - массивы

// сложный тип данных, который хорошо подходит под перечисление чего-то с одинаковым набором свойств

// * создание нового массива

const arr = [];

const numbers = [4, 8, 15, 16, 23, 42];
const fruits = ["apple", "orange", "pear"];

// * обращение к элементу массива

const pear = fruits[2];

// если обратится к несуществующему индексу будет undefined

const none = fruits[4];

// мы можем создавать массивы из разных типов данных
// но! как правило это не нужно и не удобно 🫣

const party = ["alien", 42, undefined, ["🪐", "👨‍🚀"]];

// ! цикл for - for loop

for (let i = 0; i < numbers.length; i++) {
  // console.log(i + 1 + "й элемент: " + numbers[i]);
}

// ! цикл while - while loop

let i = 0;

while (i < 3) {
  // console.log(i+ 1 + ' раз')
  i++;
}

// ! методы массивов - array methods

// функции которые позволяют совершать основные операции с массивами

// * все методы делятся на мутирующие и не мутирующий

// 1. мутирующие - изменяют исходный массив
// 2. не мутирующие - не изменяют исходный массив

const animals = ["panda", "otter", "rabbit", "racoon"];

// * push() - добавление элемента в конец массива

// метод мутирующий
// изменяет исходный массив
// возвращенное значение - длинна нового массива

animals.push("tiger");
animals.push("cow");

// ! animals = ['owl', 'frog'] - нельзя перезаписывать константу

// но можно изменять элементы внутри такого массива

// console.log(animals)

const newArrLength = animals.push("owl"); // вернет не новый массив, а кол-во элементов после добавления

// console.log(animals)

// console.log(newArrLength)

// * unshift() - добавление элемента в начало массива

// метод мутирующий
// изменяет исходный массив
// возвращенное значение - длинна нового массива

animals.unshift("lion");

// console.log(animals)

// * pop() - удаление элемента из конца массива

// метод мутирующий
// изменяет исходный массив
// возвращенное значение - удаленный элемент

const value = animals.pop(); // массив изменится, а в value окажется удаленное значение

// console.log(value)

// console.log(animals)

// * shift() - удаление элемента из начала массива

// метод мутирующий
// изменяет исходный массив
// возвращенное значение - удаленный элемент

animals.shift();

// console.log(animals)

// ! spread syntax

// один из способов скопировать массив
// используем '...' перед именем переменной с исходным массивом

const newAnimals = [...animals];

newAnimals.push("new hippo"); // добавили элемент в новый массив

// console.log(newAnimals)
// console.log(animals)

const fruitsAndAnimals = [...fruits, ...animals]; // объединили два массива в один 🍹

fruitsAndAnimals.unshift("kiwi"); // практикуем добавление 🥝

// console.log(fruitsAndAnimals)

const fruitsAndNumbers = [
  [...fruits, "melon"],
  [...numbers, 777]
];

// console.log(fruitsAndNumbers[0][3]) // находим элемент внутри вложенного массива

// ! перезапись по индексу

fruitsAndAnimals[2] = "grapefruit"; // обращаемся и перезаписываем

// console.log(fruitsAndAnimals)

// ! забрать последний элемент из массива

fruitsAndAnimals[fruitsAndAnimals.length - 1];

// ! деструктуризация массивов

// это способ в одну строку:
// объявить переменные
// забрать значения из исходного массива
// присвоить их в переменные

const cities = ["Berlin", "Munich", "Hamburg", "Leipzig"];

// * решение без деструктуризации

// const berlin = cities[0];
// const munich = cities[1];
// const hamburg = cities[2];
// const leipzig = cities[3];

// * та же задача с деструктуризацией

const [city1, munich, , leipzig] = cities // ненужные значения пропускаем

console.log(city1, munich, leipzig)

// const newArr = [...cities, cities[2]] - дописали новый элемент в массив



