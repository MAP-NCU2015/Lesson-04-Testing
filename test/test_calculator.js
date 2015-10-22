var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('operater test', function(){
    it('add', function(){
      assert.equal('7', cal.add(3, 4));
    })
    it('substract', function(){
      assert.equal('-1', cal.substract(3, 4));
    })
    it('multiply', function(){
      assert.equal('12', cal.multiply(3, 4));
    })
    it('divide', function(){
      assert.equal('2', cal.divide(4, 2));
    })  
  })
})
