var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add_pos', function(){
      assert.equal('2', cal.addition(1, 1));
    })
    it('add_neg', function(){
      assert.equal('-2', cal.addition(-1, -1));
    })
    it('add_dec', function(){
      assert.equal('0.2', cal.addition(0.1, 0.1));
    })
  })

  describe('sub', function(){
    it('sub_pos', function(){
      assert.equal('0', cal.substract(1, 1));
    })
    it('sub_neg', function(){
      assert.equal('0', cal.substract(-1, -1));
    })
    it('sub_dec', function(){
      assert.equal('0', cal.substract(0.1, 0.1));
    })
  })

  describe('mul', function(){
    it('mul_pos', function(){
      assert.equal('4', cal.multiply(2, 2));
    })
    it('mul_neg', function(){
      assert.equal('4', cal.multiply(-2, -2));
    })
    it('mul_dec', function(){
      assert.equal('0.4', cal.multiply(2, 0.2));
    })
  })

  describe('div', function(){
    it('div_pos', function(){
      assert.equal('1', cal.divide(3, 3));
    })
    it('div_neg', function(){
      assert.equal('1', cal.divide(-3, -3));
    })
    it('div_dec', function(){
      assert.equal('1', cal.divide(0.3, 0.3));
    })
  }) 
})
