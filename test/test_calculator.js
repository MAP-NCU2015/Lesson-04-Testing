var assert = require('assert');
var cal = require('../calculator.js')


describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })
    describe('substract', function(){
  	it('substract', function(){
      assert.equal('0', cal.substract(1, 1));
    })
  })
    describe('multiplicate', function(){
	it('multiplicate', function(){
      assert.equal('1', cal.multiplicate(1, 1));
    })
  })
    describe('divide', function(){
	it('divide', function(){
      assert.equal('1', cal.divide(1, 1));
    })
  })
  describe('returnvalue', function(){
  it("returns the return value from the original function", function () {
    var callback = sinon.stub().returns(42);
    var proxy = once(callback);
    assert.equals(proxy(), 42);
 })
  })
});

