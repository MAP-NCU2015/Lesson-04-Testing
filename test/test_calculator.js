var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
	it('add-negative', function(){
	  assert.equal('-3', cal.add(-1, -2));
	})
	it('add-decimal_point', function(){
	  assert.equal('2.3', cal.add(1.1, 1.2));
	})
  })
})
describe('Calculator', function(){
  describe('sub', function(){
    it('sub', function(){
      assert.equal('3', cal.sub(4, 1));
    })
	it('sub-negative', function(){
	  assert.equal('-5', cal.sub(-1, 4));
	})
	it('sub-decimal_point', function(){
	  assert.equal('3.4', cal.sub(4.0, 0.6));
	})
  })
})
describe('Calculator', function(){
  describe('mul', function(){
    it('mul', function(){
      assert.equal('2', cal.mul(1, 2));
    })
	it('mul-negative', function(){
	  assert.equal('-1', cal.mul(-1, 1));
	})
	it('mul-decimal_point', function(){
	  assert.equal('0.25', cal.mul(0.5, 0.5));
	})
  })
})
describe('Calculator', function(){
  describe('div', function(){
    it('div', function(){
      assert.equal('3', cal.div(3, 1));
    })
	it('div-negative', function(){
	  assert.equal('-3', cal.div(3, -1));
	})
	it('div-decimal_point', function(){
	  assert.equal('0.3', cal.div(0.6, 2));
	})
  })
})
