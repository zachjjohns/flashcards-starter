const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn;
    this.turns = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess, turn) {
    // const card = this.deck[0]
    // const turn = new Turn(guess, card);
    this.instantiateTurn(guess);
    this.incrementTurn();
    if (!this.turn.evaluateGuess()) {
      this.incorrect.push(this.deck[0].id);
    }
    this.currentCard = this.deck.shift();
    this.returnCurrentCard();
    return this.turn.giveFeedback();
  }

  instantiateTurn(guess) {
    this.turn = new Turn(guess, this.deck[0]);
  }

  incrementTurn() {
    this.turns++;
  }

  calculatePercentCorrect() {
    if (this.incorrect.length > 0) {
      return (100 * (1 - this.incorrect.length / this.turns).toFixed(4));
    } else {
      return '100!'
    }
  }

  endRound() {
    const messageToUser = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(messageToUser);
    return messageToUser;
  }
}

module.exports = Round;