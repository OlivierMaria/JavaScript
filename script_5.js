/*Biblioteque*/

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
const allRented = books.every(book => book.rented > 0);
console.log(`Tous les livres ont été empruntés au moins une fois : ${allRented}`);

// Quel est le livre le plus emprunté ?
const mostRented = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current);
console.log(`Le livre le plus emprunté est : ${mostRented.title}`);

// Quel est le livre le moins emprunté ?
const leastRented = books.reduce((prev, current) => (prev.rented < current.rented) ? prev : current);
console.log(`Le livre le moins emprunté est : ${leastRented.title}`);

// Trouve le livre avec l'ID: 873495
const bookWithID = books.find(book => book.id === 873495);
console.log(`Le livre avec l'ID 873495 est : ${bookWithID.title}`);

// Supprime le livre avec l'ID: 133712
const indexToDelete = books.findIndex(book => book.id === 133712);
if (indexToDelete !== -1) {
  books.splice(indexToDelete, 1);
  console.log(`Le livre avec l'ID 133712 a été supprimé.`);
}

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712)
books.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
console.log(`Les livres triés par ordre alphabétique sont :`);
books.forEach(book => console.log(book.title));