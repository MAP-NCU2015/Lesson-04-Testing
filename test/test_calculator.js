var assert = require('assert');
var sinon = require('sinon');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })
  describe('substract', function(){
    it('substract', function(){
      assert.equal('0', cal.substract(1, 1));
    })
  })
  describe('multiple', function(){
    it('multiple', function(){
      assert.equal('9', cal.multiple(3, 3));
    })
  })
  describe('isNumber', function(){
    it('isNumber', function(){
      assert.equal(true, cal.isNumber('1'));
    })
  })
  describe('isNotNumber', function(){
    it('isNotNumber', function(){
      assert.equal(false, cal.isNumber('1a'));
    })
  })
  describe('randomSubstract', function(){
    it('randomSubstract', function(){
      var cb = sinon.stub(Math, 'random').returns(0.1);
      assert.equal(0.9, cal.randomSubstract(1));
    })
  })
})
