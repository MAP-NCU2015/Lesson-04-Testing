var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })

  describe('substract', function(){
    it('substract', function(){
      assert.equal('2', cal.substract(3, 1));
    })
  })

  describe('isNumber', function(){
    it('isNumber', function(){
      assert.equal(true, cal.isNumber('3'));
    })
  })
})
