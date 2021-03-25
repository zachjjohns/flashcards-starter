const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe("Turn", function() {
  let card, turn;
  beforeEach(() => {
    card = new Card(3, "What's the best pink, long-legged bird?", ["pigeon", "penguin", "flamingo"], "flamingo");
    turn = new Turn("flamingo", card);
  })

  it("should be a function", function() {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should store the user's guess to the question", function() {
    expect(turn.guess).to.equal("flamingo")
  });

  it("should store a Card object for the current card in play", function() {
    expect(turn.card).to.deep.equal({id: 3, question: "What's the best pink, long-legged bird?", answers: ["pigeon", "penguin", "flamingo"], correctAnswer: "flamingo"});
  });

  it("should be able to return the guess", function() {
    expect(turn.returnGuess()).to.equal("flamingo");
  });

  it("should be able to return the Card", function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it("should evaluate if a guess is correct or incorrect", function() {
    const card1 = new Card(22, "What's Zach's favorite color?", ["blue", "pink", "orange"], "blue");
    const correctTurn = new Turn("blue", card1);
    const incorrectTurn = new Turn("orange", card1);
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it("should let the user know if their guess was correct/incorrect", function() {
    const card1 = new Card(24, "What's Zach's favorite food?", ["grilled cheese", "hot wings", "pears"], "hot wings");
    const correctTurn = new Turn("hot wings", card1);
    const incorrectTurn = new Turn("pears", card1);
    expect(correctTurn.giveFeedback()).to.equal("correct!");
    expect(incorrectTurn.giveFeedback()).to.equal("incorrect!");
  });
});