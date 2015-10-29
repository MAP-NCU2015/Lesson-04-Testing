var assert = require('assert');
var sinon = require("sinon");
var cal = require('../calculator.js')

describe('Calculator', function(){
    var stub = sinon.stub();
    describe('add', function(){
	it('add', function(){
	    assert.equal('2', cal.add(1, 1));
	})
    })
    describe('substract', function(){
	it('substract', function(){
	    assert.equal('0', cal.substract(1, 1));
	    assert.ifError(cal.substract(1, 'ABC'));
	})
    })
    describe('multiply', function(){
	it('multiply', function(){
	    assert.equal('1', cal.multiply(1, 1));
	    assert.equal('0.1', cal.multiply(10000, 0.00001));
	    assert.ifError(cal.multiply(1, 'ABC'));
	})
    })
    describe('division', function(){
	it('division', function(){
	    assert.equal('0.5', cal.division(1, 2));
	    assert.ifError(cal.division(1, 'ABC'));
	})
    })
    describe('calling test', function(){
	stub = sinon.stub(Math, "random");
	stub.returns(Math.random());

	cal.add(1,Math.random()*100);
	assert(stub.called);

	stub.restore();
    })
})
