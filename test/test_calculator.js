var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('0~9 + 0~9', function(){
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          assert.equal(i+j, cal.add(i, j));
        }
      }
    })
  })

  describe('add', function(){
    it('1000 random case', function(){
      for (var i = 0; i < 1000; i++) {
          var x = Math.random();
          var y = Math.random();
          assert.equal(x+y, cal.add(x, y));
      }
    })
  })

  describe('substract', function(){
    it('0~9 - 0~9', function(){
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          assert.equal(i-j, cal.substract(i, j));
        }
      }
    })
  })

  describe('substract', function(){
    it('1000 random case', function(){
      for (var i = 0; i < 1000; i++) {
          var x = Math.random();
          var y = Math.random();
          assert.equal(x-y, cal.substract(x, y));
      }
    })
  })

  describe('multiple', function(){
    it('0~9 * 0~9', function(){
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          assert.equal(i*j, cal.multiple(i, j));
        }
      }
    })
  })

  describe('multiple', function(){
    it('1000 random case', function(){
      for (var i = 0; i < 1000; i++) {
          var x = Math.random();
          var y = Math.random();
          assert.equal(x*y, cal.multiple(x, y));
      }
    })
  })

  describe('division', function(){
    it('1~9 / 1~9', function(){
      for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
          assert.equal(i/j, cal.division(i, j));
        }
      }
    })
  })

  describe('division', function(){
    it('1000 random case', function(){
      for (var i = 0; i < 1000; i++) {
          var x = Math.random();
          var y = Math.random();
          assert.equal(x/y, cal.division(x, y));
      }
    })
  })

  describe('Is number?', function(){
    it('Positive', function(){
        assert.equal(true, cal.isNumber('123.456'));
        assert.equal(true, cal.isNumber('-789.012'));
        assert.equal(true, cal.isNumber('345'));
        assert.equal(true, cal.isNumber('-678'));
        assert.equal(true, cal.isNumber('0.901'));
        assert.equal(true, cal.isNumber('-0.234'));
        assert.equal(true, cal.isNumber('0567'));
        assert.equal(true, cal.isNumber('-0890'));
    })
  })

  describe('Is number?', function(){
    it('Negative', function(){
        assert.equal(false, cal.isNumber('.12'));
        assert.equal(false, cal.isNumber('+123.456'));
        assert.equal(false, cal.isNumber('0.'));
        assert.equal(false, cal.isNumber('123.456.789'));
        assert.equal(false, cal.isNumber('1e10'));
        assert.equal(false, cal.isNumber('1e-10'));
        assert.equal(false, cal.isNumber('-1e10'));
        assert.equal(false, cal.isNumber('-1e-10'));
        assert.equal(false, cal.isNumber('0xabcdef'));
    })
  })
})
