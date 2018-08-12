var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('claculator can add', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  });

  it('claculator can subtract', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

	it("claculator can multiply", function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

	it("claculator can divide", function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

	it("claculator has working buttons", function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 123);
  });

	it("calculator has working operator buttons: + & =", function () {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 5);
  });

  it("calculator has working operator buttons: - & =", function () {
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 3);
  });

  it("calculator has working operator buttons: * & =", function () {
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 15);
  });

  it("calculator has working operator buttons: / & =", function () {
    calculator.numberClick(21);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 3);
  });

  it("calculator has working operator buttons: multiple", function () {
    calculator.numberClick(21);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 23);
  });

  it("calculator has working operator buttons: clear", function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 123);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  });

	it("divide by 0 returns an error", function () {
    calculator.numberClick(9);
    calculator.operatorClick("/");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, "Error");
  });


});
