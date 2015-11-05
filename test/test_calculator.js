var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('will add', function(){
      assert.equal('18', cal.add(12, 6));
    })
	it('will substract', function(){
      assert.equal('6', cal.substract(12, 6));
    })
	it('will multiple', function(){
      assert.equal('72', cal.multiple(12, 6));
    })
	it('will divide', function(){
	  //this will be wrong
      assert.equal('3', cal.divide(12, 6));
    })
  })
})
