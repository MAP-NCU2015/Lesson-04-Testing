var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })
  describe('sub', function(){
    it('substract', function(){
      assert.equal('0', cal.substract(1, 1));
    })
  })
  describe('isnum', function(){
    it('isnum', function(){
      assert.equal(true, cal.isNumber(100));
    })
  })
  describe('isnum', function(){
    it('isnum', function(){
      assert.equal(false, cal.isNumber('s'));
    })
  })
  describe('mul', function(){
    it('mul', function(){
      assert.equal('40', cal.multiplication(8, 5));
    })
  })
})