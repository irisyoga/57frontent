
const heading = document.getElementById("heading");
const shipTitle = document.getElementById("ship-title");

// Promise<Respone> -json-> Promise<Pirate>
fetch("https://alisherkhamidov.github.io/pirate-api/jack-sparrow.json") // Promise<Response>
  .then((res) => res.json()) // Promise<Pirate>
  .then((pirate) => {
    console.log(pirate.age);
    heading.textContent = pirate.name;
    shipTitle.textContent += pirate.ship.title;
  })
  .catch((e) => {
    console.log(e);
  });