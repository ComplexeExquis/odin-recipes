let pancakeRecipe = document.getElementById("pancake-recipe");
let croissantRecipe = document.getElementById("croissant-recipe");
let frenchToastRecipe = document.getElementById("french-toast-recipe");
let pbjRecipe = document.getElementById("pbj-recipe");


function mouseOver() {
    document.querySelectorAll(".individual-recipe").forEach(function (recipe) {
        recipe.style.cursor = "pointer";
    });
}


croissantRecipe.addEventListener("click", function() {
    window.location.href = "./recipes/croissant.html";
    croissantRecipe.style.cursor = "";
});

pancakeRecipe.addEventListener("click", function() {
    window.location.href = ""; // pancake.html
});

frenchToastRecipe.addEventListener("click", function() {
    window.location.href = ""; // frenchToastRecipe.html
});

pbjRecipe.addEventListener("click", function() {
    window.location.href = ""; // pbj.html
});

