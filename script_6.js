/*Code la vie*/


// Tableau associatif des correspondances codon-acide aminé
const codonToAminoAcid = {
  UCU: "Sérine",
  UCC: "Sérine",
  UCA: "Sérine",
  UCG: "Sérine",
  AGU: "Sérine",
  AGC: "Sérine",
  CCU: "Proline",
  CCC: "Proline",
  CCA: "Proline",
  CCG: "Proline",
  UUA: "Leucine",
  UUG: "Leucine",
  UUU: "Phénylalanine",
  UUC: "Phénylalanine",
  CGU: "Arginine",
  CGC: "Arginine",
  CGA: "Arginine",
  CGG: "Arginine",
  AGA: "Arginine",
  AGG: "Arginine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
};

// Fonction qui prend un ARN et renvoie une chaîne de caractères représentant les acides aminés correspondants
function translateRNA(rna) {
  let aminoAcids = "";
  for (let i = 0; i < rna.length; i += 3) {
    // On prend chaque groupe de 3 nucléotides
    const codon = rna.slice(i, i + 3);
    // On trouve l'acide aminé correspondant dans notre tableau associatif
    const aminoAcid = codonToAminoAcid[codon];
    // On ajoute cet acide aminé à notre chaîne de caractères
    aminoAcids += aminoAcid + "-";
  }
  // On enlève le dernier tiret
  return aminoAcids.slice(0, -1);
}

// Exemples d'utilisation de la fonction
console.log(translateRNA("UUACGCAGUAGA")); // "Leucine-Arginine-Sérine-Arginine"
console.log(translateRNA("CCGUCGUUGCGCUACAGC")); // "Proline-Arginine-Sérine-Leucine-Sérine"
console.log(translateRNA("CCUCGCCGGUACUUCUCG")); // "Leucine-Arginine-Glycine-Tyrosine-Leucine-Arginine"
