const prompt =require ("prompt-sync")();
let danon = prompt ("Nom de l'article   ");
let prix = prompt ("prix");
let quantite = prompt ("quantite");
let total = prix * quantite;
console.log(danon);
console.log(prix);
console.log(quantite);
console.log(total);