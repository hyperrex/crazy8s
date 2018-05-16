const deal = function() {
  let playerHand = [];
  let i = 0;
  const dealCards = setInterval(function() {
    playerHand.push(deck.cards[i]);
    console.log(playerHand);
    playerHand[i].animateTo({
      delay: 1000, // wait 1 second + i * 2 ms
      duration: 500,
      ease: 'quartOut',
      x: window.innerWidth * 0.5 * (i / 7),
      y: window.innerHeight * 0.3
    });
    i++;
    if (i === 7) {
      clearInterval(dealCards);
    }
  }, 250);
};

const explode = function() {
  deck.cards.forEach(function(card, i) {
    card.setSide('front');

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
