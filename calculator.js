function isNumber(numStr) {
    var re = /^[0-9\.]+$/;
    return re.test(numStr);
}

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function random(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1)) + num1;
}

module.exports.add = add;
module.exports.substract = substract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.isNumber = isNumber;
module.exports.random = random;
