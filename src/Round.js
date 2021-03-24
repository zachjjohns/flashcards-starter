const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const card = this.deck[0]
    const turn = new Turn(guess, card);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrect.push(this.deck[0].id);
    }
    this.currentCard = this.deck.shift();
    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    if (this.incorrect.length > 0) {
      return (100 * (1 - this.incorrect.length / this.turns));
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