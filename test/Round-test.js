const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe("Round", () => {
  let card1, card2, card3, deck, turn, round;
  beforeEach(() => {
    card1 = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    card2 = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    card3 = new Card(19, "A doctor with a PhD is a doctor of what?", ["philosophy", "science", "math"], "philosophy");
    deck = new Deck([card1, card2, card3]);
    turn = new Turn("flamingo", card1);
    round = new Round(deck);
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should instantiate with a deck of cards", () => {
    expect(round.deck).to.equal(deck.cards);
  });

  it("should start with 0 turns", () => {
    expect(round.turns).to.equal(0);
  })

  it("should be able to return the current card", () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should start a new Turn and go to the next card when a guess is made", () => {
    round.takeTurn("flamingo");
    expect(turn).to.be.an.instanceof(Turn);
    expect(round.turns).to.equal(1)
    expect(round.deck[0]).to.deep.equal(card2);
  });

  it("should save any incorrect guesses", () => {
    round.takeTurn("penguin");
    expect(round.incorrect).to.deep.equal([card1.id]);
  });

  it("should tell the user if guess is correct or incorrect", () => {
    expect(round.takeTurn("flamingo")).to.equal("correct!");
  });

  it("should be able to calculate the percentage of correct answers", () => {
    round.takeTurn("flamingo");
    round.takeTurn("2008");
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it("should inform user when the round is over", () => {
    round.takeTurn("flamingo");
    round.takeTurn("2008");
    round.takeTurn("philosophy");
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`);
  })
});