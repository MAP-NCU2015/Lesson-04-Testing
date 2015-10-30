var assert = require('assert');
var cal = require('../calculator.js')
var sinon = require('sinon');

describe('Calculator', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  
	it('substract',function(){
	   assert.equal('1' , cal.substract(2,1));
	})
  
	it('mul',function(){
	   assert.equal('6' , cal.mul(2,3));
	})
  
	it('div',function(){
	   assert.equal('0.5' , cal.div(1,2));
	})
})

describe('Negative path', function(){
	it('isNumber',function(){
		assert.equal(false,cal.isNumber('13A'));
	})
})

describe('Sinon', function(){
	it('stub mul function',function(){
		var stub = sinon.stub().returns(30);
		var proxy = cal.mul(stub(), 5);
		
		assert.equal(150, proxy);
	})
})
