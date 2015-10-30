function isNumber(numStr){
	var re = /^[0-9\.]+$/; 
	return re.test(numStr);
}

function add(num1, num2){
	return num1 + num2;
}

function substract(num1, num2){
	return num1 - num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return num1 / num2;
}

function addARanNum(num1, RanGen){
	var randomNum = RanGen()*100;
	return num1 + randomNum;
}

module.exports.isNumber = isNumber;
module.exports.add = add;
module.exports.substract = substract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.addARanNum = addARanNum;
