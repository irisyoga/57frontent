
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

//1.4 Повысьте возраст героев на 10 лет
const olderHeroses = starWarsHeroes.map
(hero => ({hero, age: hero.age + 10 }));
console.log(olderHeroses);

//1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
//`{ name: "Darth Vader", isJedi: false, age: 50 }`
const updatedHeroes=starWarsHeroes.map(hero => hero.name === "Anakin Skywalker") ? { name: "Darth Vader", isJedi: false, age: 50 : hero};
console.log(updatedHeroes);

//1.6 Создайте на основе старого массива новый массив объектов по образу:
//`[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]`

const nameAndJediStatus = starWarsHeroes.map(hero => ({ name: hero.name, isJedi: hero.isJedi}));
console.log(nameAndJediStatus);