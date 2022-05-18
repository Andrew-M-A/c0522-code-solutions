var bad = 1;
var mid = 50;
var amazin = 100;

var maximumValue = Math.max(bad, mid, amazin);
console.log('value of maximumValue: ', maximumValue);

var heroes = ['Iron-Man', 'Iceman', 'Storm', 'Thanos'];

var randomNumber = Math.random(heroes);
console.log('value of randomNumber: ', randomNumber);

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);

var library = [
  {
    title: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzche'
  },
  {
    title: 'Siddhartha',
    author: 'Herman Hesse'
  },
  {
    title: 'Les Fleurs du Mal',
    author: 'Charles Baudelaire'
  }
];

var lastBook = library.pop();
console.log('value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library: ', library);

var fullName = 'Andrew Almeida';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
