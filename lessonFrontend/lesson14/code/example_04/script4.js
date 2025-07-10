
const img = document.getElementById("image");
fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj[0].url);
    img.src = obj[0].url;
  })
  .catch((error) => {
    console.error("Error fetching the cat image:", error);
  });
