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
  describe('multiple', function(){
    it('multiple', function(){
      assert.equal('9', cal.multiple(3, 3));
    })
  })
  describe('isNumber', function(){
    it('isNumber', function(){
      assert.equal(true, cal.isNumber(1));
    })
  })
})
