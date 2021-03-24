const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe("Round", () => {
  let card1, card2, card3, deck, round;
  beforeEach(() => {
    card1 = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    card2 = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    card3 = new Card(19, "A doctor with a PhD is a doctor of what?", ["philosophy", "science", "math"]);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should be a function", function() {
    expect(Round).to.be.a("function");
  });


  it("should be an instance of Round", function() {
    // const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it("should instantiate with a deck of cards", function() {
    // const card1 = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    // const card2 = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    // const card3 = new Card(19, "A doctor with a PhD is a doctor of what?", ["philosophy", "science", "math"]);
    // const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it("should be able to return the current card", function() {
    // const card1 = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    // const card2 = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    // const card3 = new Card(19, "A doctor with a PhD is a doctor of what?", ["philosophy", "science", "math"], "philosophy");
    // const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  // it("should start a new Turn when a guess is made", function() {
    // const card1 = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    // const card2 = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    // const card3 = new Card(19, "A doctor with a PhD is a doctor of what?", ["philosophy", "science", "math"], "philosophy");
    // const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
    // round.takeTurn("flamingo");
    // expect
  // })
})