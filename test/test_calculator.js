var assert = require('assert');
var cal = require('../calculator.js')
var sinon = require('../node_modules/sinon/lib/sinon.js')

describe('Calculator', function () {
    describe('positive test', function () {
        it('add', function () {
            assert.equal('12', cal.add(10, 2));
        })
        it('substract', function () {
            assert.equal('8', cal.substract(10, 2));
        })
        it('multiply', function () {
            assert.equal('20', cal.multiply(10, 2));
        })
        it('divide', function () {
            assert.equal('5', cal.divide(10, 2));
        })
    })
    describe('negative test', function () {
        it('isnumber', function () {
            assert.equal(false, cal.isNumber("abc"));
        })
    })
    describe('work with sinon.js', function () {
        it('stub with the random number', function () {
            var stub = sinon.stub(cal, "random").returns(50);
            var callback = stub();
            assert.equal('100', cal.add(50, callback));
        })
    })
})
