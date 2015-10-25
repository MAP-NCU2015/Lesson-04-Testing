var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('Basic operation', function(){
    it('add', function(){
      assert.equal('600', cal.add(100, 500));
    })
    it('substract', function(){
      assert.equal('200', cal.substract(500, 300));
    })
    it('multiply', function(){
      assert.equal('50000', cal.multiply(100, 500));
    })
    it('divide', function(){
      assert.equal('70', cal.divide(700, 10));
    })
    it('remainder', function(){
      assert.equal('299', cal.remainder(999, 700));
    })
  })
  describe('Unvalid Input', function(){
        it('not number', function(){
            assert.equal(false, cal.isNumber('HEFYUHUEFH'))
        })
  })
})
