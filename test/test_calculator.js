var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('All Operator', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
    it('substract', function(){
      assert.equal('0', cal.substract(1, 1));
    })
    it('multiply', function(){
      assert.equal('4', cal.multiply(2, 2));
    })
    it('divide', function(){
      assert.equal('2', cal.divide(2, 1));
    })
  })
  
  describe('isnumber', function(){
  	it('isNumber', function(){
	      assert.equal(false, cal.isNumber('a'));
	      assert.equal(true, cal.isNumber(1));
   })
})
