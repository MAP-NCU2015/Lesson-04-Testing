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

function devide(num1, num2){
	return num1 / num2;
}

function random(){
	return Math.floor((Math.random() * 100) + 1);
}

// exports method for other modules or files to use
module.exports.add = add;
module.exports.isNumber = isNumber;
module.exports.substract = substract;
module.exports.multiply = multiply;
module.exports.devide = devide;
module.exports.random = random;