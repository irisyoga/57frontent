
/*Для каждого задания создайте отдельную функцию — используйте возвращенное значение. У вас должна быть как минимум одна стрелочная функция и одна function declaration функция.*/

//Задание 1 У вас есть массив объектов:
const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

//1.2 Создайте новый массив с джедаями младше 40 лет
const youngJedi = starWarsHeroes.filter(hero => hero.isJedi && hero.age < 40 );
console.log(youngJedi);

//1.3 Посчитайте возраст всех джедаев
const sumOfAges = starWarsHeroes.filter(hero => hero.isJedi).reduce((acc ,hero ) => acc + hero.age, 0);
console.log(sumOfAges);

//1.4 Повысьте возраст героев на 10 лет *map() + ...spread operator!!!!!(копируем все свойства массива и изменяем только нужные из них)
const olderHeroes = starWarsHeroes.map
(hero => ({...hero, age: hero.age + 10 }));
console.log(olderHeroes);

//1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
//`{ name: "Darth Vader", isJedi: false, age: 50 }`

const replaceAnakin = heroes =>
  heroes.map(hero =>
    hero.name === "Anakin Skywalker"
      ? { ...hero, name: "Darth Vader", isJedi: false, age: 50 }
      : hero
  );
const updatedHeroes = replaceAnakin(starWarsHeroes);
console.log( updatedHeroes);
//updatedHeroes — новый массив, где первый объект заменён на Дарта Вейдера, а исходный starWarsHeroes остаётся неизменным.


//1.6 Создайте на основе старого массива новый массив объектов по образу:
//`[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]`

const nameAndJediStatus = starWarsHeroes.map(hero => ({ name: hero.name, isJedi: hero.isJedi}));
console.log(nameAndJediStatus);

