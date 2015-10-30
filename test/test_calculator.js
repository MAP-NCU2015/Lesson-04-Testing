var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('5.73', cal.add(4.5, 1.23));
    })
	describe('subtract', function(){
    it('subtract', function(){
      assert.equal('0', cal.subtract(1, 1));
    })
	describe('multiply', function(){
    it('multiply', function(){
      assert.equal('3.75', cal.multiply(3, 1.25));
    })
	describe('divide', function(){
    it('divide', function(){
      assert.equal('3', cal.divide(24, 8));
    })
  })
})
