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
      assert.equal('3', cal.substract(4, 1));
    })
  })
  describe('multiply', function(){
    it('', function(){
      assert.equal('2', cal.multiply(1, 2));
    })
  })
  describe('divide', function(){
    it('divide', function(){
      assert.equal('2', cal.divide(2, 1));
    })
  })
	describe('isNumber', function(){
		it('isNumber', function(){
			assert.equal('1', cal.isNumber(1));
			assert.equal('0', cal.isNumber('YOLO'));
		})
	})
})
