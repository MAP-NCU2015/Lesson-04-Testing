var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
    
    it('substract', function(){
      assert.equal('10', cal.substract(20, 10));
    })
  
    it('multiply', function(){
      assert.equal('12', cal.multiply(3, 4));
    })
  
    it('devide', function(){
      assert.equal('2', cal.devide(20, 10));
    })
 })
  describe('Unvalid Input', function(){
        it('not number', function(){
            assert.equal(false, cal.isNumber('ABC'))
        })
    })
})