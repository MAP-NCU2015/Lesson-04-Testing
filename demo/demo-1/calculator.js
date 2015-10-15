function add(num1, num2){
  return num1 + num2;
}

document.getElementById('go_btn').onclick = function(){
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('ans').value = add(num1, num2);
}
