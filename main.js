window.onload = function(){
  document.getElementById('go_btn').onclick = function(){
    var num1Str = document.getElementById('num1').value;
    var num2Str = document.getElementById('num2').value;
    if (!isNumber(num1Str) || !isNumber(num2Str)){
      alert("Some of the input is not a number!")
      document.getElementById('ans').value = "ERROR"
<<<<<<< HEAD
      return;
    }
    var num1 = parseFloat(num1Str);
    var num2 = parseFloat(num2Str);
    var operator = document.getElementById('operator').value;
    
    switch(operator){
      case "add":
        document.getElementById('ans').value = add(num1, num2);
      break;

      case "substract":
        document.getElementById('ans').value = substract(num1, num2);
      break;

      case "multiply":
        document.getElementById('ans').value = multiply(num1, num2);
      break;

      case "divide":
        document.getElementById('ans').value = divide(num1, num2);
      break;

      case "mod":
        document.getElementById('ans').value = mod(num1, num2);
      break;

      default:
        alert("Bad operator!");
      break;
=======
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
    else {
      alert("Bad operator!")
>>>>>>> 578f386cdfc85fbd576ba57a3fc87b7ce425761a
    }
  }
}
