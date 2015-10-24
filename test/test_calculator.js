var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('function', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
	it('sub', function(){
      assert.equal('0', cal.substract(1, 1));
    })
	it('multiply', function(){
      assert.equal('1', cal.multiply(1, 1));
    })
	it('divide', function(){
      assert.equal('2', cal.divide(10, 5));
    })
	it('divide', function(){
      assert.equal('ERROR', cal.divide(1, 0));
    })
  })
})
