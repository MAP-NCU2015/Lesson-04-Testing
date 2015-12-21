var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('123', cal.add(54, 69));
    })
    it('substract', function(){
      assert.equal('-12', cal.substract(46, 58));
    })
    it('multiplication', function(){
      assert.equal('1036', cal.multiplication(28, 37));
    })
    it('division', function(){
      assert.equal('91', cal.division(1547, 17));
    })
  })
describe('Unvalid Input', function(){
    it('not a number', function(){
      assert.equal(false, cal.isNumber('Hello'))
    })
  })
})
