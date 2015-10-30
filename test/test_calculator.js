var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){

  describe('isNumber', function(){
  	it('input is number', function(){
  	  assert.equal(true, cal.isNumber(513));
 	}),

 	it('input is not number', function(){
 	  assert.equal(false, cal.isNumber("asd12"));
 	})
  }),

  describe('add', function(){
    it('add_positive', function(){
      assert.equal('2', cal.add(1, 1));
    }),

    it('add_negative', function(){
      assert.equal('-4', cal.add(1, -5));
    })
  }),

  describe('substract', function(){
    it('substract_positive', function(){
      assert.equal('2', cal.substract(3, 1));
    }),

    it('substract_negative', function(){
      assert.equal('6', cal.substract(-1, -7));
    })
  }),

  describe('multiply', function(){
    it('multiply_positive', function(){
      assert.equal('10', cal.multiply(2, 5));
    }),

    it('multiply_negative', function(){
      assert.equal('-15', cal.multiply(-3, 5));
    })
  }),

  describe('divide', function(){
    it('divide_positive', function(){
      assert.equal('2', cal.divide(4, 2));
    }),

    it('divide_negative', function(){
      assert.equal('-5', cal.divide(20, -4));
    })
  }),

  describe('mod', function(){
    it('mod_positive', function(){
      assert.equal('2', cal.mod(5, 3));
    }),

    it('mod_negative', function(){
      assert.equal('-2', cal.mod(-5, -3));
    })
  })
});
