let deal = function() {
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
