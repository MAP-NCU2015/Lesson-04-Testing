var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('All Operator', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
    it('substract', function(){
      assert.equal('0', cal.substract(1, 1));
    })
    it('mult', function(){
      assert.equal('4', cal.mult(2, 2));
    })
    it('div', function(){
      assert.equal('2', cal.div(2, 1));
    })
  })
  
  describe('Not a number', function(){
	  it('NotaNumber', function(){
      assert.equal(false, cal.isNumber('a'));
   })
})
