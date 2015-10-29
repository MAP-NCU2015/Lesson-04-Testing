// to use methods from other files we simply use `require` with path name
var assert = require('assert');
var cal = require('../calculator.js')
var sinon = require('sinon')

describe('Calculator', function(){
	describe('add', function(){
	    it('add', function(){
	      assert.equal('2', cal.add(1, 1));
	    })
	  })

	describe('substract' , function(){
	    it('substract', function(){
			assert.equal('3', cal.substract(5, 2));
	    })
	  })
	/* ------------ Add new feature (× / ÷) ------------ */
	describe('multiply', function(){
		it('multiply', function(){
			assert.equal('20', cal.multiply(4, 5));
		})
	})

	describe('devide', function(){
		it('devide', function(){
			assert.equal('4', cal.devide(28, 7));
		})
	})
	/* ----------------- negative path ----------------- */
	describe('negativeAdd' ,function(){
		it('negativeAdd', function(){
			assert.notEqual('6', cal.add(2,3));
		})
	})
	describe('negativeSubstract' , function(){
	    it('negativeSubstract', function(){
			assert.notEqual('3', cal.substract(5, 1));
	    })
	})

	describe('negativeMultiply', function(){
		it('negativeMultiply', function(){
			assert.notEqual('21', cal.multiply(4, 5));
		})
	})

	describe('devide', function(){
		it('devide', function(){
			assert.notEqual('5', cal.devide(28, 7));
		})
	})
	/* --------- Add and mock the random number --------- */
	describe('random', function() {
        it('random', function() {
			sinon.stub(Math, 'random').returns(20);
            assert.equal('22', cal.add(Math.random(), 2));
        })
    })
})