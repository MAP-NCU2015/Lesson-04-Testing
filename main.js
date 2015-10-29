window.onload = function(){
  document.getElementById('go_btn').onclick = function(){
    var num1Str = document.getElementById('num1').value;
    var num2Str = document.getElementById('num2').value;
    if (!isNumber(num1Str) || !isNumber(num2Str)){
      alert("Some of the input is not a number!")
      document.getElementById('ans').value = "ERROR"
      return
    }
    var num1 = parseFloat(num1Str)
    var num2 = parseFloat(num2Str)
    var operator = document.getElementById('operator').value;
    if (operator == "add"){
      document.getElementById('ans').value = add(num1, num2);
    }
    else if (operator == "substract"){
      document.getElementById('ans').value = substract(num1, num2);
    }
	else if (operator == "multiply"){
      document.getElementById('ans').value = multiply(num1, num2);
    }
    else {
      alert("Bad operator!")
    }
  }
}
