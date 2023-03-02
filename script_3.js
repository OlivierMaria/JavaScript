/*Pyramide de Mario*/

// Demander à l'utilisateur le nombre d'étages qu'il souhaite
let nbEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
nbEtages = parseInt(nbEtages); // convertir en nombre entier

// Boucle pour afficher la pyramide
for (let i = 1; i <= nbEtages; i++) {
  let row = '';
  
  // Ajouter des espaces
  for (let j = 1; j <= nbEtages - i; j++) {
    row += ' ';
  }
  // Ajouter des dièses
  for (let k = 1; k <= i; k++) {
    row += '#';
  }
  console.log(row);
}



