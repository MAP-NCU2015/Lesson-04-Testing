var assert = require('assert');
var cal = require('../calculator.js')
var sinon = require('sinon')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('12', cal.add(10, 2));
    })
  })
  
  describe('substract',function () {
  	it('substract',function () {
  		assert.equal('8',cal.substract(10,2));
  	})
  })
  
  describe('multiply',function () {
  	it('multiply',function () {
  		assert.equal('20',cal.multiply(10,2));
  	})
  })
  
  describe('divide',function () {
  	it('divide',function () {
  		assert.equal('5',cal.divide(10,2));
  	})
  })
  
  describe('negative_add',function () {
  	it('negative_add',function () {
  		assert.notEqual('1',cal.add(10,2));
  	})
  })
  
  describe('negative_substract',function () {
  	it('negative_substract',function () {
  		assert.notEqual('1',cal.substract(10,2));
  	})
  })
  
  describe('negative_multiply',function () {
  	it('negative_multiply',function () {
  		assert.notEqual('1',cal.multiply(10,2));
  	})
  })
  
  describe('negative_divide',function () {
  	it('negative_divide',function () {
  		assert.notEqual('6',cal.divide(10,2));
  	})
  })
  
  describe('random_num',function (){
  	it('random_num',function () {
  		sinon.stub(Math, 'random').returns(78);
  		assert.equal('80',cal.add(Math.random(),2));
  	})
  })
})
