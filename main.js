window.onload = function(){
  document.getElementById('go_btn').onclick = function(){
	var ans = document.getElementById('ans');
    var num1Str = document.getElementById('num1').value;
    var num2Str = document.getElementById('num2').value;
    if (!isNumber(num1Str) || !isNumber(num2Str)){
      alert("Some of the input is not a number!")
      ans.value = "ERROR"
      return
    }
    var num1 = parseFloat(num1Str);
    var num2 = parseFloat(num2Str);
	var operator = document.getElementById('operator').value;
	switch(operator){
		case 'add':
			ans.value = add(num1, num2);
			break;
		case 'substract':
			ans.value = substract(num1, num2);
			break;
		case 'multi':
			ans.value = multi(num1, num2);
			break;
		case 'divide':
			ans.value = divide(num1, num2);
			break;
		default:
		      alert("Bad operator!");	
	}
  }
}
