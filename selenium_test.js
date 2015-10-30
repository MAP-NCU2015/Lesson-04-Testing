var webdriver = require('selenium-webdriver');
var assert = require('assert');

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
        assert.equal(value,'22');
    });

