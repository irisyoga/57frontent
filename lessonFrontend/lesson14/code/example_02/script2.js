

const hopInterval = setInterval(() => {
  console.log("Hop!")// Выводит "Hop!" каждые 3 секунды
}, 3000);

setTimeout(() => {
  clearInterval(hopInterval);
   // Остановит интервал через 10 секунд 
}, 10000); 





