
function getRandomCocktail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
     .then( response => response.json())
     .then( data => { 
        const cocktail = data.drinks[0];
        const cocktailName = cocktail.strDrink;
        const cocktailImage = cocktail.strDrinkThumb;
        const cocktailInstructions = cocktail.strInstructionsDE;

        document.getElementById("cocktail-image").src = cocktailImage;
        document.getElementById("cocktail-description").textContent = `Название: ${cocktailName}. Описание: ${cocktailInstructions}`;
})
.catch(error =>{
    console.log("Ошибка при загрузке коктейля", error);
    document.getElementById("cocktail-description").textContent = "Не  удалось загрузить коктейль";
})
}
// getRandomCocktail();
