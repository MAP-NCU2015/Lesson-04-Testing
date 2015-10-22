var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add1', function(){
      assert.equal('1.791', cal.add(1.555, 0.236));
    })
    it('add2',function(){
      assert.equal('5',cal.add(4 , 1));
    })
    it('substract1',function(){
      assert.equal('4', cal.substract(6,2));
    })
    it('substract2',function(){
      assert.equal('18',cal.substract(20 , 2));
    })
    it('multilpy1',function(){
      assert.equal('12', cal.multilply(6,2));
    })
    it('multilpy2',function(){
      assert.equal('18.492',cal.multilply(5.36,3.45));	
    })
    it('divide1',function(){
      assert.equal('2',cal.divide(6 , 3));
    })
    it('Input',function(){
      assert.equal(true,cal.isNumber(1.2345));
    })
  })
})

