var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('8', cal.add(3, 5));
    })
  })
  describe('substract',function(){
	it('substract',function(){
		assert.equal('-2',cal.substract(3,5));
	})
  })
  describe('multiply',function(){
	it('multiply',function(){
		assert.equal('15',cal.multiply(3,5));
	})
  })
  describe('divide', function(){
    it('divide', function(){
      assert.equal('5', cal.divide(15, 3));
    })
  })
  describe('isNumber', function(){
    it('isNumber', function(){
      assert.equal('1', cal.isNumber(-1));
      assert.equal('0', cal.isNumber('ABC'));
    })
  })
  s
})
