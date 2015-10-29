function isNumber(numStr){
  var re = /^[\-]?[0-9]+[\.]?[0-9]*$/; //can cal for negative number
  return re.test(numStr);
}

function add(num1, num2){
  return num1 + num2;
}

function substract(num1, num2){
  return num1 - num2;
}

function mult(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return num1 / num2;
}

module.exports.add = add;
module.exports.isNumber = isNumber;
