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

function mul(num1, num2){
  return num1 * num2;
}

function div(num1, num2){
  return num1 / num2;
}
module.exports.add = add;
module.exports.isNumber = isNumber;
