var assert = require('assert');
var cal = require('../calculator.js')

/**
var sinon=require('sinon')
*/
describe('Calculator', function(){
  	describe('add', function(){
    	it('add_positive', function(){
      		assert.equal('10',cal.add(5,5));
    	})
    	it('add_decimal', function(){
      		assert.equal('0.2',cal.add(0.1,0.1));
    	})
    	it('add_negative', function(){
      		assert.equal('-2', cal.add(-1,-1));
    	})
  	})

	describe('sub',function(){
	    it('sub_positive', function(){
      		assert.equal('0',cal.sub(5,5));
    	})
    	it('sub_decimal', function(){
      		assert.equal('0',cal.sub(0.1,0.1));
    	})
    	it('sub_negative', function(){
      		assert.equal('0',cal.sub(-1,-1));
    	})
  	})

	describe('mul',function(){
	    it('mul_positive',function(){
      		assert.equal('25',cal.mul(5,5));
    	})
    	it('mul_decimal', function(){
      		assert.equal('0.5',cal.mul(5,0.1));
    	})
    	it('mul_negative', function(){
      		assert.equal('1',cal.mul(-1,-1));
    	})
  	})
  describe('div',function(){
      it('div_positive',function(){
          assert.equal('1',cal.div(5,5));
      })
      it('div_decimal', function(){
          assert.equal('50',cal.div(5,0.1));
      })
      it('div_negative', function(){
          assert.equal('1',cal.div(-1,-1));
      })
    })
})
