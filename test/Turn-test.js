const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
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
    expect(turn.card).to.deep.equal({id: 3, question: "What's the best pink, long-legged bird?", answers: ["pigeon", "penguin", "flamingo"], correctAnswer: "flamingo"});
  });

  it("should be able to return the guess", function() {
    const card = new Card(6, "When did Facebook launch?", ["2004", "1998", "2008"], "2004");
    const turn = new Turn("2004", card);
    expect(turn.returnGuess()).to.equal("2004");
  });

  it("should be able to return the Card", function() {
    const card = new Card(19, "A doctor with a PhD is a doctor of what?", ["philosophy", "science", "math"]);
    const turn = new Turn("philosophy", card);
    expect(turn.returnCard()).to.equal(card);
  });

  it("should evaluate if a guess is correct or incorrect", function() {
    const card = new Card(22, "What's Zach's favorite color?", ["blue", "pink", "orange"], "blue");
    const correctTurn = new Turn("blue", card);
    const incorrectTurn = new Turn("orange", card);
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it("should let the user know if their guess was correct/incorrect", function() {
    const card = new Card(24, "What's Zach's favorite food?", ["grilled cheese", "hot wings", "pears"], "hot wings");
    const correctTurn = new Turn("hot wings", card);
    const incorrectTurn = new Turn("pears", card);
    expect(correctTurn.giveFeedback()).to.equal("correct!");
    expect(incorrectTurn.giveFeedback()).to.equal("incorrect!");
  });
});