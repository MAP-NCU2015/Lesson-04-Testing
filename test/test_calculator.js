var assert = require('assert');
var cal = require('../calculator.js');
var sinon = require('../node_modules/sinon/lib/sinon.js');

describe('Calculator', function() {
            it('add', function() {
                assert.equal('2', cal.add(1, 1));
            })
            it('substract', function() {
                assert.equal('3', cal.substract(5, 2));
            })
            it('multi', function() {
                assert.equal('30', cal.multi(3, 10));
            })
            it('divide', function() {
                assert.equal('7', cal.divide(28, 4));
            })
    })
	
    //Negative path
describe('ERROR', function() {
    it('generates an false', function() {
        assert.equal(false, cal.isNumber('1DA'));
    })
})

describe('Sinon', function() {
    it('stubbing something', function() {
        var callback = sinon.stub();
    })
})