var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
    it('add negative', function () {
        assert.equal('-2', cal.add(-1, -1));
    })
  })

  describe('substract', function () {
      it('substract', function () {
          assert.equal('5', cal.substract(10, 5));
      })
      it('substract negative', function () {
          assert.equal('-5', cal.substract(-10, -5));
      })
  })

  describe('multiple', function () {
      it('multiple', function () {
          assert.equal('50', cal.multiple(10, 5));
      })
      it('multiple negative', function () {
          assert.equal('50', cal.multiple(-10, -5));
      })
  })

  describe('divide', function () {
      it('divide', function () {
          assert.equal('2', cal.divide(10, 5));
      })
      it('divide negative', function () {
          assert.equal('2', cal.divide(-10, -5));
      })
  })
})
