var assert = require('assert');
var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
describe('Calculator-Selenium', function() {
    it('add', function(done){
	this.timeout(60000);
	driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
	driver.get("file:///" + __dirname + "/../index.html");
	driver.wait(function(){
	    driver.findElement(webdriver.By.id('num1')).sendKeys('23');
	    driver.findElement(webdriver.By.id('num2')).sendKeys('00');
	    driver.findElement(webdriver.By.id('go_btn')).click();
	    var ans = driver.findElement(webdriver.By.id('ans')).getAttribute('value').then(function(value){
		assert.equal(value, 223);
		done();
	    });
	},3000).then(done);
    });
});
