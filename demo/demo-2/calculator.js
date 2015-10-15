function isNumber(numStr){
  var re = /^[0-9\.]+$/; 
  return re.test(numStr)
}

function add(num1, num2){
  return num1 + num2;
}

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
  document.getElementById('ans').value = add(num1, num2);
}
