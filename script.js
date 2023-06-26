let pancakeRecipe = document.getElementById("pancake-recipe");
let croissantRecipe = document.getElementById("croissant-recipe");
let frenchToastRecipe = document.getElementById("french-toast-recipe");
let pbjRecipe = document.getElementById("pbj-recipe");



croissantRecipe.addEventListener("click", function() {
    window.location.href = "./recipes/croissant.html";
});

pancakeRecipe.addEventListener("click", function() {
    window.location.href = "./recipes/pancake.html"; // pancake.html
});

frenchToastRecipe.addEventListener("click", function() {
    window.location.href = "./recipes/frenchToast.html"; // frenchToastRecipe.html
});

pbjRecipe.addEventListener("click", function() {
    window.location.href = "./recipes/pbj.html"; // pbj.html
});

