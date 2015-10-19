var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
    describe('Basic Functions', function(){
        it('add', function(){
            assert.equal('30', cal.add(20, 10));
        })
        it('substract', function(){
            assert.equal('10', cal.substract(20, 10));
        })
        it('multiply', function(){
            assert.equal('200', cal.multiply(20, 10));
        })
        it('divide', function(){
            assert.equal('2', cal.divide(20, 10));
        })
    })
    describe('Unvalid Input', function(){
        it('not number', function(){
            assert.equal(false, cal.isNumber('ABC'))
        })
    })
})
