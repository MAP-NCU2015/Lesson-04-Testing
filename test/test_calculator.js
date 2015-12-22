var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  it('add', function(){
    assert.equal('2', cal.add(1, 1));
  })

  it('substract', function(){
    assert.equal('0',cal.substract(1,1));
  })

  it('multiplication', function(){
    assert.equal('4',cal.multiplication(2,2));
  })

  it('divide',function(){
    assert.equal('3',cal.divide(9,3));
  })
})
