var books = [
  {
    isbn: '123456-89201',
    title: 'Random Book Title',
    author: 'Andrew M. A.'
  },
  {
    isbn: '997153-20721',
    title: 'Summer of BootCamp',
    author: 'CSS Sith Lord Drew'
  },
  {
    isbn: '845762-00921',
    title: 'Glass Half...?',
    author: 'Anxious Andy'
  }
];

console.log('typeOf books: ', typeof books);

var JBooks = JSON.stringify(books);

console.log('typeOf Jbooks: ', typeof JBooks);
console.log('value of JBooks: ', JBooks);

var student = '{"id":"2813308004","name":"Andrew"}';

var wholeStudent = JSON.parse(student);

console.log('value of wholeStudent: ', wholeStudent);
console.log('typeOf wholeStudent: ', typeof wholeStudent);
