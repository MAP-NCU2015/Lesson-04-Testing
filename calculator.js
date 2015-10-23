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

function multiplication(num1, num2){
  return num1 * num2;
}

exports.substract = substract;
exports.add = add;
exports.isNumber = isNumber;
exports.multiplication = multiplication;