// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  document.body.appendChild(clonedBtn);
  clonedBtn.textContent = "Я изменю тебя";
})

// здесь можете создать EventListener для второй кнопки

clonedBtn.addEventListener('click', () => {
  btn.style.color = "black";
  btn.style.backgroundColor = "#9c4a1a";
  
})