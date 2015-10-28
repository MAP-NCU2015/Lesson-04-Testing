var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){  
    it('add', function(){
      assert.equal('2.1', cal.add(1, 1.1));
    })
	it('substract', function(){
      assert.equal('8.01', cal.substract(10.11, 2.1));
    })
	it('mul', function(){
      assert.equal('20', cal.mul(10, 2));
    })
	it('div', function(){
      assert.equal('5', cal.div(10, 2));
    })  
})

describe('negative path tests', function(){  
    it('false', function(){
      assert.equal('false', cal.isNumber('AAA'));
    })
})