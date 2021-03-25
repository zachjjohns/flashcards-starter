const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(cardDetails => {
      const card = new Card(
        cardDetails.id,
        cardDetails.question,
        cardDetails.answers,
        cardDetails.correctAnswer,
      );
      cards.push(card);
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);

  }
}

module.exports = Game;