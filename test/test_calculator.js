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
  describe('mul', function(){
    it('mul', function(){
      assert.equal('1', cal.mul(1, 1));
    })
  })
  describe('div', function(){
    it('div', function(){
      assert.equal('1', cal.div(1, 1));
    })
  })
})
