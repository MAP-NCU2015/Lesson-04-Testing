var assert = require('assert');
var cal = require('../calculator.js')
var sinon = require('sinon')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })

    it('can add two random number', function () {
      var randomNumberGenerator = sinon.stub().returns(42);
      assert.equal('84', cal.add(randomNumberGenerator(), randomNumberGenerator()))
    })
  })

  describe('substract', function () {
    it('substract', function () {
      assert.equal('3', cal.substract(5,2));
    })

    it('can substract two random number', function () {
      var randomNumberGenerator = sinon.stub().returns(42);
      assert.equal('0', cal.substract(randomNumberGenerator(), randomNumberGenerator()))
    })
  })

  describe('isNumber', function () {
    it('check if input is a number', function () {
      assert.equal(true, cal.isNumber('64'))
    })

    it('know the input are not numbers', function () {
      assert.equal(false, cal.isNumber('56a'))
    })
  })

  describe('multiply', function () {
    it('multiply', function () {
      assert.equal('30', cal.multiply(3, 10))
    })

    it('can multiply two random number', function () {
      var randomNumberGenerator = sinon.stub().returns(42);
      assert.equal('1764', cal.multiply(randomNumberGenerator(), randomNumberGenerator()))
    })
  })

  describe('divide', function () {
    it('divide', function () {
      assert.equal('2', cal.divide(4, 2))
    })

    it('can divide two random number', function () {
      var randomNumberGenerator = sinon.stub().returns(42);
      assert.equal('1', cal.divide(randomNumberGenerator(), randomNumberGenerator()))
    })
  })
})
