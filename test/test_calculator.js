var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('Basic Function', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
	it('substract', function(){
      assert.equal('4', cal.substract(7, 3));
    })
	it('multiply', function(){
      assert.equal('21', cal.multiply(7, 3));
    })
	it('divide', function(){
      assert.equal('3', cal.divide(9, 3));
    })
	it('mod', function(){
      assert.equal('0', cal.mod(9, 3));
    })
  })
  
  describe('Not a number', function(){
	  it('Not a number', function(){
      assert.equal(false, cal.isNumber('a'));
    })
  })
})
