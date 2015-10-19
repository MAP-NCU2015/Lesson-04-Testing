var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){

  describe('add', function(){
    
    it('add1', function(){
      assert.equal('2', cal.add(1, 1));
    })

    it('add2', function(){
    	assert.equal('2.596', cal.add(1.236, 1.360));
    })

  })

  describe('substract', function(){

  	it('substract1', function(){
  		assert.equal('-5', cal.substract(0, 5));
  	})

  	it('substract2', function(){
  		assert.equal('-2.354', cal.substract(1.352, 3.706));
  	})

  })

  
})
