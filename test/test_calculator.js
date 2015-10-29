var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function () {
    describe('add', function () {
        describe('addpositive', function () {
            it('add', function () {
                assert.equal('2', cal.add(1, 1));
            })
        })
        describe('addnagative', function () {
            it('add', function () {
                assert.equal('3', cal.add(4, -1));
            })
        })
        describe('addonepoint', function () {
            it('add', function () {
                assert.equal('4', cal.add(2.4, 1.6));
            })
        })
        describe('addpointone', function () {
            it('add', function () {
                assert.equal('2.511', cal.add(2.4, .111));
            })
        })
        describe('addexponential', function () {
            it('add', function () {
                assert.equal('8', cal.add(0, 2 ^ 3));
            })
        })
    })
    describe('sub', function () {
        describe('subtractpositive', function () {
            it('substract', function () {
                assert.equal('2', cal.substract(4, 2));
            })
        })
        describe('subtractnagative', function () {
            it('substract', function () {
                assert.equal('6', cal.substract(4, -2));
            })
        })
        describe('subtracttonagative', function () {
            it('substract', function () {
                assert.equal('-2', cal.substract(2, 4));
            })
        })
    })
    describe('mul', function () {
        describe('mulpositive', function () {
            it('multiply', function () {
                assert.equal('8', cal.multiply(2, 4));
            })
        })
        describe('mulnagative', function () {
            it('multiply', function () {
                assert.equal('-256', cal.multiply(16, -16));
            })
        })
    })
    describe('div', function () {
        describe('divpositive', function () {
            it('divide', function () {
                assert.equal('8', cal.divide(16, 2));
            })
        })
        describe('divnagative', function () {
            it('divide', function () {
                assert.equal('-9', cal.divide(27, -3));
            })
        })
    })
})
