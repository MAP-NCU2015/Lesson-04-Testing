var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
      assert.equal('6', cal.add(3, 3));
      assert.equal('ERROR', cal.add(1.5.5, 0)); //negative path test
    })
  })
  describe('mult', function(){
    it('mult', function(){
      assert.equal('0', cal.mult(0, 1));
      Infinity
    })
  })
  describe('divide', function(){
    it('divide', function(){
      assert.equal('0', cal.mult(0, 1));
      assert.equal('Infinity', cal.mult(5, 0));
    })
  })
})
