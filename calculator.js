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

function randomAdd(num) {
  return Math.random() + num;
}

module.exports.add = add;
module.exports.substract = substract;
module.exports.multiply = multiply;
module.exports.randomAdd = randomAdd;
module.exports.isNumber = isNumber;
