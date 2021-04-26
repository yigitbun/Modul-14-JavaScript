/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};


for (const [key, value] of Object.entries(books)) {
  console.log(key, value);
}

// add a new book to the books object
// using dot notation
books.book4='Frühling'
console.log(books)
// using square bracket notation
books['book5'] = 'Sommer';
// remove an book from the books object
console.log(books)
// log the third book

// iterate over the books and log every single one

/**
 * ARRAYS
 */
let movies = [
  'Pulp Fiction', 
  'Inception', 
  'Call me by your name', 
  'Batman'
];

// add a new movie to the array

// remove the movie „Call me by your name“ from the movies object

// log the first movie

// iterate over the movies and log every single one 