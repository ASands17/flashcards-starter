const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
let Card = require('../src/Card');


describe('Deck', function(){

  it ('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should take in an array as its argument', function(){
    const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
    const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
    const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
    const deck = new Deck([testCard, testCard2, testCard3]);
    console.log(deck);
    expect([testCard, testCard2, testCard3]).to.be.an('array');
  });


  it('should take in instances of the card class', function() {
    const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
    const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
    const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
    const deck = new Deck([testCard, testCard2, testCard3]);
    console.log(deck);

    var cardChecker = deck.forEach(deckCard => {
      console.log(deckCard instanceof Card);
    });

    expect(cardChecker).to.be.true;
  });

  it ('should count the cards in the deck array', function() {
    const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
    const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
    const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
    const deck = new Deck([testCard, testCard2, testCard3]);

    expect(deck.countCards())to.equal(3);
  });

});
