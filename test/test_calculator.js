var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })
  describe('multiply', function(){
    it('multiply', function(){
      assert.equal('7', cal.multiply(7, 1));
    })
  })
  describe('isNumber', function(){
    it('isNumber', function(){
      assert.equal('1', cal.isNumber(5));
	  assert.equal('0', cal.isNumber('%'));
    })
  })
})
