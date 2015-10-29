var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
	it('add-negative', function(){
	  assert.equal('-3', cal.mul(-1, -2));
	})
  })
})
describe('Calculator', function(){
  describe('sub', function(){
    it('sub', function(){
      assert.equal('3', cal.sub(4, 1));
    })
	it('sub-negative', function(){
	  assert.equal('-5', cal.mul(-1, 4));
	})
  })
})
describe('Calculator', function(){
  describe('mul', function(){
    it('mul', function(){
      assert.equal('2', cal.mul(1, 2));
    })
	it('mul-negative', function(){
	  assert.equal('-1', cal.mul(-1,1));
	})
  })
})
describe('Calculator', function(){
  describe('div', function(){
    it('div', function(){
      assert.equal('3', cal.div(3, 1));
    })
	it('div-negative', function(){
	  assert.equal('-3', cal.mul(-1,1));
	})
  })
})
