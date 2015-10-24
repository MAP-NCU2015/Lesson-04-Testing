var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('ComputeTest', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
    it('subtract', function () {
      assert('2',cal.sub(4,2))
    })
    it('multiply',function()
    {
      assert('4',cal.mul(2,2))
    })
    it('devide',function()
    {
      assert('1',cal.dev(2,2))
    })
  })
  describe('NotNumberTest', function(){
    it('notNumber', function(){
      assert.equal(false, cal.isNumber('a'));
    })

  })
})
