var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function () {
    describe('add_positive', function () {
        it('add', function () {
            assert.equal('2', cal.add(1, 1));

        })
    })
    describe('add_nagative', function () {
        it('add', function () {
            assert.equal('-2', cal.add(-1, -1));

        })
    })
})
