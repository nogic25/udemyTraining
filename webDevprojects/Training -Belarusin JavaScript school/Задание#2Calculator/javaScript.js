var firstNum = parseFloat(prompt("Введите первое значение: "));
var operator = prompt("Введите первое значение: ");
var secondNum = parseFloat(prompt("Введите второе значение: "));
var result;

switch (operator) {
   case "+":
      result = firstNum + secondNum;
      break;
   case "-":
      result = firstNum - secondNum;
      break;
   case "*":
      result = firstNum * secondNum;
      break;
   case "%":
      result = firstNum % secondNum;
      break;
   default:
      result = "Undefind operator";
}
alert(result);
