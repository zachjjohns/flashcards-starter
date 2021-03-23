const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe("Turn", function() {

  it("should be a function", function() {
    // const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should store the user's guess to the question", function() {
    const card = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    const turn = new Turn("flamingo", card);
    expect(turn.guess).to.equal("flamingo")
  });

  it("should store a Card object for the current card in play", function() {
    const card = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    const turn = new Turn("flamingo", card);
    expect(turn.card).to.deep.equal({id: 3, question:"What's the best pink, long-legged bird?", answers:["pigeon", "penguin", "flamingo"], correctAnswer:"flamingo"});
  });

  it("should be able to return the guess", function() {
    const card = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    const turn = new Turn("2004", card);
    expect(turn.returnGuess()).to.equal("2004");
  });

  it("should be able to return the Card", function() {
    const turn = new Turn("philosophy", "A doctor with a PhD is a doctor of what?");
    expect(turn.returnCard()).to.equal("A doctor with a PhD is a doctor of what?");
  });
});