function isNumber(numStr){
  var re = /^-?([0-9\.])+$/; 
  return re.test(numStr);
}

function add(num1, num2){
  return num1 + num2;
}

function sub(num1, num2){
  return num1 - num2;
}

function mul(num1, num2){
	return num1*num2;
}

function div(num1, num2){
	return num1/num2;
}

module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
module.exports.isNumber = isNumber;
