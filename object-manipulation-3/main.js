console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create an array for each player
// create an array for the deck
// create an array of suits
// create an arry of ranks
// loop through the suits array and the ranks array at the same time
// on each loop, create a card with properties with values of each suit/rank pair
// should have 52 objects after
// push those cards into the deck array

var aj = [];
var anthony = [];
var andrew = [];
var alex = [];

var deck = [];

var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (var suit = 0; suit < suits.length; suit++) {
  for (var rank = 0; rank < ranks.length; rank++) {
    var card = { suit: suits[suit], rank: ranks[rank] };
    deck.push(card);
  }
}

for (var i = deck.length - 1; i > 0; i--) {
  var shuffle = Math.floor(Math.random() * i);
  console.log(deck[shuffle]);
}
