/*Opérations & boucles*/


function factorielle(n) {
  if (n === 0) {  // Cas particulier pour n=0
    return 1;
  } else {  // Cas général pour n>0
    return n * factorielle(n-1);
  }
}

// Affichage d'un message dans la console pour demander à l'utilisateur de saisir un nombre
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Conversion de la chaîne de caractères saisie par l'utilisateur en nombre entier
nombre = parseInt(nombre);

// Calcul de la factorielle du nombre saisi par l'utilisateur en appelant la fonction factorielle
let resultat = factorielle(nombre);

// Affichage du résultat dans la console
console.log("Le résultat est : " + resultat);
