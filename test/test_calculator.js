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
      assert.equal('2', cal.substract(3, 1));
    })
  })

  describe('isNumber', function(){
    it('isNumber', function(){
      assert.equal(true, cal.isNumber('3'));
    })

    it('isNotNumber', function(){
      assert.equal(false, cal.isNumber('3d'));
    })
  })

  describe('multiply', function(){
    it('multiply', function(){
      assert.equal(6, cal.multiply(3, 2));
    })
  })

  describe('randomAdd', function(){
    it('randomAdd', function(){
      var cb = sinon.stub(Math, 'random').returns(0.1);
      assert.equal(1.1, cal.randomAdd(1));
    })
  })
})
