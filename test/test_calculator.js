var assert = require('assert');
var sinon = require('sinon');
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
  
  describe('multiply', function(){
    it('multiply', function(){
      assert.equal('2', cal.multiply(2, 1));
    })
  })
  
  describe('divide', function(){
    it('divide', function(){
      assert.equal('2', cal.divide(2, 1));
    })
  })

  describe('positive path test', function(){
    it('isNumber', function(){
      assert.equal(true, cal.isNumber(2));
    })
  })

  describe('negative path test', function(){
    it('isNumber', function(){
      assert.equal(false, cal.isNumber('abcd'));
    })
  })
  
  describe('test with a stub', function(){
    it('addARanNum', function(){
		var randomMock = sinon.stub().returns(20);
		assert.equal(2020, cal.addARanNum(20,randomMock));
    })
  })
  
})
