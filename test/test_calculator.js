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
      assert.ifError(cal.substract(1, 'ABC'));
    })
  })
  describe('multiply', function(){
    it('multiply', function(){
      assert.equal('1', cal.multiply(1, 1));
      assert.equal('0.1', cal.multiply(10000, 0.00001));
      assert.ifError(cal.multiply(1, 'ABC'));
    })
  })
  describe('division', function(){
    it('division', function(){
      assert.equal('0.5', cal.division(1, 2));
	assert.ifError(cal.division(1, 'ABC'));
    })
  })
})
