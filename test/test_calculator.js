var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })

  describe('substract', function () {
    it('substract', function () {
      assert.equal('3', cal.substract(5,2));
    })
  })

  describe('isNumber', function () {
    it('check if input is a number', function () {
      assert.equal(true, cal.isNumber('64'))
    })
  })
})
