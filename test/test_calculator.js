var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
	it('add', function(){
      assert.equal('ERROR', cal.add(a, b));
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
	it('module', function(){
      assert.equal('0', cal.module(9, 3));
    })
  })
})
