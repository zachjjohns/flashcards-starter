const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe("Deck", function() {
  let card1, card2, card3, deck;  
  beforeEach(() => {
    card1 = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    card2 = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    card3 = new Card(19, "A doctor with a PhD is a doctor of what?", ["philosophy", "science", "math"]);
    deck = new Deck([card1, card2, card3]);
  });

  it("should be a function", function() {
    expect(Deck).to.be.a("function");
  });

  it("should instantiate with an array of cards", function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should be able to count the number of cards in the deck", function() {
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  });
});