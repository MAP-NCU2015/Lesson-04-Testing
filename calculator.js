function isNumber(numStr){
<<<<<<< HEAD
  var re =  /^[+-]?[0-9]+\.{0,1}[0-9]*$/; 
=======
  var re = /^[0-9\.]+$/; 
>>>>>>> 578f386cdfc85fbd576ba57a3fc87b7ce425761a
  return re.test(numStr);
}

function add(num1, num2){
  return num1 + num2;
}

function substract(num1, num2){
  return num1 - num2;
}

<<<<<<< HEAD
function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return num1 / num2;
}

function mod(num1, num2){
	return num1 % num2;
}

module.exports.add = add;
module.exports.substract = substract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.mod = mod;
=======
module.exports.add = add;
>>>>>>> 578f386cdfc85fbd576ba57a3fc87b7ce425761a
module.exports.isNumber = isNumber;
