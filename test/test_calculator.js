var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })
  
  describe('substract', function(){
	it('substract',function(){
	   assert.equal('1' , cal.substract(2,1));
	})
  })
})
