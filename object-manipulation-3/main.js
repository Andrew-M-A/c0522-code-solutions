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
    if (card.rank !== 'J' && card.rank !== 'Q' && card.rank !== 'K' && card.rank !== 'A') {
      card.value = parseInt(ranks[rank]);
    } else if (card.rank === 'A') {
      card.value = 11;
    } else {
      card.value = 10;
    }
    deck.push(card);
  }
}

deck = _.shuffle(deck);

const deal = player => {
  for (var i = 0; i < 1; i++) {
    player.hand = deck.splice(0, 2);
  }
};

deal(aj);
deal(anthony);
deal(andrew);
deal(alex);

const greatest = [];

const score = player => {
  player.score = null;
  for (var i = 0; i < player.hand.length; i++) {
    player.score += player.hand[i].value;
  }
  greatest.push(player);
};

score(aj);
score(anthony);
score(andrew);
score(alex);

// const winner = player => {
//   let highScore = 0;
//   let winner = null;
//   for (var i = 0; i < greatest.length; i++) {
//     if (greatest[i].score > highScore) {
//       highScore = greatest[i].score;
//       winner = greatest[i].name;
//     }
//   }
//   return `${winner} is the winner with a score of ${highScore}!`;
// };
