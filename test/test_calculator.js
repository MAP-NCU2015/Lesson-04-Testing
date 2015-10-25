var assert = require('assert');
var sinon  = require('sinon');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('isNumber', function(){
    var tests = [
      { input: '.3',     output: true },
      { input: '0.5',    output: true },
      { input: '+3',     output: true },
      { input: '-5',     output: true },
      { input: '-.2',    output: true },
      { input: '+.1',    output: true },
      { input: '+1.14',  output: true },
      { input: '2.56',   output: true },
      { input: '-7.777', output: true },
      { input: 'ab',     output: false },
      { input: '+-7',    output: false },
      { input: '2b',     output: false },
      { input: 'c6',     output: false },
      { input: '1..2',   output: false },
      { input: '--3.7',  output: false }
    ];
    tests.forEach( function(test){
      it('tell "' + test.input + '" as ' + test.output, function(){
        assert.equal(test.output, cal.isNumber(test.input));
      })
    })
  })
  describe('add', function(){
    it('add correct value', function(){
      assert.equal('2', cal.add(1, 1));
    })
    it('add random value', function(){
      var generator = Math.random;
      var number = generator();
      assert.equal(1+number, cal.add(1, number));
    })
    it('add stub random value', function(){
      var generator = sinon.stub().returns(5);
      var number = generator();
      assert.equal('6', cal.add(1, number));
    })
  })
  describe('substract', function(){
    it('substract correct value', function(){
      assert.equal('0', cal.substract(1, 1));
    })
  })
  describe('multiply', function(){
    it('multiply correct value', function(){
      assert.equal('1', cal.multiply(1, 1));
    })
  })
})
