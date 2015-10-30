var assert = require('assert');
var cal = require('../calculator.js')
var sinon=require('sinon')
var webdriver = require('selenium-webdriver');
describe('Calculator', function(){
    describe('add', function(){
        it('add', function(){
            assert.equal('2', cal.add(1, 1));
        })
        it('add_decimal', function(){
            assert.equal('2.2', cal.add(1.1, 1.1));
        })
        it('add_neg', function(){
            assert.equal('-2', cal.add(-1,-1));
        })
        it('add_neg', function(){
            assert.equal('-2', cal.add(-1,-1));
        })

    })
    describe('sub', function(){
        it('sub', function(){
            assert.equal('0', cal.substract(1, 1));
        })
        it('sub_decimal',function(){
            assert.equal('0',cal.substract(1.1,1.1));
        })
        it('sub_neg',function(){
            assert.equal('0',cal.substract(-13.15,-13.15));
        })
    })
    describe('mul', function(){
        it('mul', function(){
            assert.equal('1', cal.mul(1, 1));
        })

        it('mul_decimal', function(){
            assert.equal('65', cal.mul(0.65,100));
        })
        it('mul_neg', function(){
            assert.equal('-11', cal.mul(-11, 1));
        })
    })
    describe('div', function(){
        it('div', function(){
            assert.equal('1', cal.div(1, 1));
        })
        it('div_decimal', function(){
            assert.equal('1', cal.div(1.1, 1.1));
        })
        it('div_neg', function(){
            assert.equal('-1', cal.div(-1, 1));
        })
    })

    describe('negative_test', function(){
        it('shold be false', function(){
            assert.equal(false, cal.isNumber('a'));
            assert.equal(true, cal.isNumber(1));
        })
    })
    describe('sinon_test',function(){
        it('Sinon test',function(){
            var stub = sinon.stub(Math,"random").returns(39);

            assert.equal(39,cal.mul(Math.random(),1));
        })
    })
    describe('selenium-webdriver',function(){
        it('selenium-test',function(done){
            var driver = new webdriver.Builder().
                forBrowser('chrome').build();
                driver.get("http://127.0.0.1:8000/")
                var searchBox=driver.findElement(webdriver.By.id('num1'));
                searchBox.sendKeys('1');
                var searchBox2=driver.findElement(webdriver.By.id('num2'));
                searchBox2.sendKeys('1');
                driver.findElement(webdriver.By.id('go_btn')).click();
                var searchBoxResult = driver.findElement(webdriver.By.id('ans'));
                searchBoxResult.getAttribute('value').then(function(value){
                    console.log(value);
                    assert.equal(value,'3');
                }).then(done());
                //driver.quit();    
        })
    })


})
