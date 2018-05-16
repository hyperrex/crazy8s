/************************/
/*   declare variable   */
/************************/

let playerHand = [];
let compHand = [];
let playedCards = [];
let cardInPlay = playedCards[playedCards.length - 1];
let turn = null; //'player' or 'computer'
let suit = null; //suit 0 = 'diamonds', 1 = 'clubs', 2 = 'hearts', 3 = 'spades'


const $container = document.getElementById('container');
// Create deck
const deck = new Deck();
// Mount deck
deck.mount($container);
deck.shuffle();
deck.flip();
/************************/
/*   create functions   */
/************************/

const startingHands = (function() {
  for (let i = 0; i < 14; i++) {
    if (i % 2 === 0) {
      playerHand.push(deck.cards.shift());
      //animate function goes here
    } else {
      compHand.push(deck.cards.shift());
      //animate function goes here
    }
  }
})();

const firstMove = (function() {
  return Math.random() < 0.5 ? (turn = 'player') : (turn = 'computer');
})();
console.log(turn);

const gameOver = function() {
  // game over stuff
};

const gameTie = function() {
  // game tie stuff
};

const playerMove = function() {
  let stagedCards = [];
  // add selected card to stagedCards
  let activeCard = stagedCards[stagedCards.length - 1];
  if (activeCard.rank === 8) {
    // launch suit picker
    // valid  move
  } else if (activeCard.suit === cardInPlay.suit) {
    // valid move
  } else if (activeCard.rank === cardInPlay.rank) {
    suit = activeCard.suit;
    // valid move
  }
  if (playerHand.length === 0 || compHand.length === 0) {
    gameOver();
  } else if (deck.cards.length === 0) {
    gameTie();
  } else {
    turn = 'computer';
  }
};

const mostCompSuits = function() {
  // frequency map of suits to assist in choosing new suit
};

const computerMove = function() {};

const explode = function() {
  deck.cards.forEach(function(card, i) {
    card.setSide(Math.random() < 0.5 ? 'front' : 'back');
    // explode
    card.animateTo({
      delay: 1000 + i * 2, // wait 1 second + i * 2 ms
      duration: 500,
      ease: 'quartOut',
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2
    });
  });
};

/************************/
/*      game stuff      */
/************************/

// const $container = document.getElementById('container');
// // Create deck
// const deck = new Deck();
// // Mount deck
// deck.mount($container);
// var card = deck.cards[0];
// card.mount($container);
// card.enableDragging();
// card.enableFlipping();
// card.setSide('front');

// deal();
// startingHands();
// firstMove();
