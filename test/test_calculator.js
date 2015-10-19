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
      assert.equal('2', cal.substract(3, 1));
    })
  })
describe('multiply', function(){
    it('multiply', function(){
      assert.equal('6', cal.multiply(3, 2));
    })
  })
describe('divide', function(){
    it('divide', function(){
      assert.equal('2', cal.divide(4, 2));
    })
  })
})
