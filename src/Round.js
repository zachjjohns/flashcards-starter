const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const card = this.currentCard;
    const turn = new Turn(guess, card);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrect.push(this.currentCard.id);
    }
    this.currentCard = this.deck.cards[this.turns];
  }
}

module.exports = Round;