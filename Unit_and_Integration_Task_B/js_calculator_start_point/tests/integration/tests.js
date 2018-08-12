var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('Do the number buttons work to update the display of the running total?', function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#number2")).click();
    element(by.css("#number3")).click();
    element(by.css("#number4")).click();
    element(by.css("#number5")).click();
    element(by.css("#number6")).click();
    element(by.css("#number7")).click();
    element(by.css("#number8")).click();
    element(by.css("#number9")).click();
    element(by.css("#number0")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("1234567890");
  });

  it('claculator can add', function() {
    runningTotal = element(by.css("#runningTotal"));
    element(by.css("#number1")).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

  it('claculator can subtract', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  });

	it("claculator can multiply", function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15');
  });

	it("claculator can divide", function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  });

  it('claculator can chain multiple operations', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('23');
  });

  it('claculator can clear without affecting the running total', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#clear')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  });

  it('claculator can return negative numbers', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-3');
  });

  it('claculator can return large numbers', function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#number2")).click();
    element(by.css("#number3")).click();
    element(by.css("#number4")).click();
    element(by.css("#number5")).click();
    element(by.css("#number6")).click();
    element(by.css("#number7")).click();
    element(by.css("#number8")).click();
    element(by.css("#number9")).click();
    element(by.css("#number0")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("1234567890");
    element(by.css("#operator_multiply")).click;
    element(by.css("#number1")).click();
    element(by.css("#number2")).click();
    element(by.css("#number3")).click();
    element(by.css("#number4")).click();
    element(by.css("#number5")).click();
    element(by.css("#number6")).click();
    element(by.css("#number7")).click();
    element(by.css("#number8")).click();
    element(by.css("#number9")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("12345678901234570000");
  });

  it('claculator can return decimals', function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number9")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("1.8");
  });

  it('claculator returns error on divide by 0', function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number9")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("Error");
  });

});
