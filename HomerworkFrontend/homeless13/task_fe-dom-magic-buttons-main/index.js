// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
//добавили класс
clonedBtn.className = "second-btn";
//изменяем текст
clonedBtn.textContent = "Я изменю тебя";
//меняем фон
clonedBtn.style.backgroundColor = "#a78b71" 
//меняем цвет текста
clonedBtn.style.color = "white"

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  document.body.append(clonedBtn)
})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";

})