var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function () {

  describe('add', function () {

    it('add1', function () {
      assert.equal('2', cal.add(1, 1));
    })

    it('add2', function () {
      assert.equal('2.596', cal.add(1.236, 1.360));
    })

  })

  describe('substract', function () {

    it('substract1', function () {
      assert.equal('-5', cal.substract(0, 5));
    })

    it('substract2', function () {
      assert.equal('-2.354', cal.substract(1.352, 3.706));
    })

  })


  describe('multiply', function () {

    it('multiply1', function () {
      assert.equal('10', cal.multiply(5, 2));
    })

    it('multiply2', function () {
      assert.equal('0', cal.multiply(0, 15))
    })

  })

  describe('divide', function () {

    it('divide1', function () {
      assert.equal('103', cal.divide(309, 3))
    })

    it('divide2', function () {
      assert.equal('4.5', cal.divide(13.5, 3))
    })

    it('divide3', function () {
      assert.equal('Infinity', cal.divide(2165, 0))
    })

  })

})
