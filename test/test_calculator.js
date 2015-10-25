var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add correct value', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })
  describe('substract', function(){
    it('substract correct value', function(){
      assert.equal('0', cal.substract(1, 1));
    })
  })
  describe('multiply', function(){
    it('multiply correct value', function(){
      assert.equal('1', cal.multiply(1, 1));
    })
  })
})
