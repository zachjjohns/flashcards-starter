class Round {
  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard() {
    console.log(this.deck.cards);
    return this.deck.cards[0];
  }
}

module.exports = Round;