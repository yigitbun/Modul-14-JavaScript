/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};


// for (const [key, value] of Object.entries(books)) {
//   console.log(key, value);
// }

// add a new book to the books object
// using dot notation
books.book4='Frühling'
// console.log(books)
// using square bracket notation
books['book5'] = 'Sommer';
// remove an book from the books object
delete books.book5;
// log the third book
// console.log(books['book3'])
// console.log(books['book5']) // deleted, should give undefined!
// console.log('---------------------');


// iterate over the books and log every single one
// for (key in books){
//   console.log(books[key])
// }
// console.log('---------------------');

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
// movies.push("New Movie")
// remove the movie „Call me by your name“ from the movies object
// movies.splice(2,1)
// log the first movie
// console.log(movies[0])
console.log('---------------------');
// iterate over the movies and log every single one 
// for (movie in movies){
//   console.log(movie, movies[movie])
// }

movies.forEach((value) => {
  console.log(value);
});