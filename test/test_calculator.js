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
      assert.equal('3', cal.substract(5, 2));
    })
  })
  describe('multi', function(){
    it('multi', function(){
      assert.equal('30', cal.multi(3, 10));
    })
  })
  describe('divide', function(){
    it('divide', function(){
      assert.equal('7', cal.divide(28, 4));
    })
  })

})
