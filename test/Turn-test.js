const chai = require('chai');
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
    const turn = new Turn("flamingo", "What's the best pink, long-legged bird?");
    expect(turn.guess).to.equal("flamingo")
  });

  it("should store a Card object for the current card in play", function() {
    const turn = new Turn("flamingo", "What's the best pink, long-legged bird?");
    expect(turn.card).to.equal("What's the best pink, long-legged bird?");
  });

  it("should return the guess", function() {
    const turn = new Turn("2004", "When did Facebook launch?");
    expect(turn.returnGuess()).to.equal("2004");
  })
});