var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  }),

  describe('substract', function(){
    it('substract', function(){
      assert.equal('0', cal.substract(1, 1));
    })
  }),

  describe('multiply', function(){
    it('multiply', function(){
      assert.equal('10', cal.multiply(2, 5));
    })
  }),

  describe('divide', function(){
    it('divide', function(){
      assert.equal('2', cal.divide(4, 2));
    })
  }),

  describe('mod', function(){
    it('mod', function(){
      assert.equal('2', cal.mod(5, 3));
    })
  })
});
