var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2.1', cal.add(1, 1.1));
    })
  })
})

describe('Calculator', function(){
  describe('mul', function(){
    it('mul', function(){
      assert.equal('20', cal.add(10, 2));
    })
  })
})
