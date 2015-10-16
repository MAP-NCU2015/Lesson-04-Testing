var assert = require('assert');
var cal = require('../calculator.js')

assert.equal('1','2')
describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('3', cal.add(1, 1));
    })
  })
})
