
//GET запрос на сервер
fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((products) => {
    console.log(products);
    products.forEach((product) => {
      // Создаем элемент списка
      const productItem = document.createElement("li");
      li.textContent = product.title; // Устанавливаем текст элемента списка
      // Добавляем элемент списка в документ
      document.getElementById("productList").appendChild(li);
    });
     
  });