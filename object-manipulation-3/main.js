console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create an array for each player
// create an array for the deck
// create an array of suits
// create an arry of ranks
// loop through the suits array and the ranks array at the same time
// on each loop, create a card with properties with values of each suit/rank pair
// should have 52 objects after
// push those cards into the deck array

var aj = {
  name: 'AJ',
  hand: []
};
var anthony = {
  name: 'Anthony',
  hand: []
};
var andrew = {
  name: 'Andrew',
  hand: []
};
var alex = {
  name: 'Alex',
  hand: []
};

var deck = [];

var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (var suit = 0; suit < suits.length; suit++) {
  for (var rank = 0; rank < ranks.length; rank++) {
    var card = { suit: suits[suit], rank: ranks[rank] };
    deck.push(card);
  }
}

deck = _.shuffle(deck);

for (var i = 0; i < 2; i++) {
  aj.hand.push(deck[i]);
  anthony.hand.push(deck[i]);
  andrew.hand.push(deck[i]);
  alex.hand.push(deck[i]);
}

console.log(aj.hand, anthony.hand, andrew.hand, alex.hand);
