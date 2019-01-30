//Написать функцию, которая проверит правильность расстановки круглых скобок
var str=prompt("Введите строку: ");


function bracket(string){
var count =0;

for( var i in string){

if (str[i]=="("){
 count++;
}
else if (str[i]==")"){
 count--;
 }
 if (count ==-1){
  return false;
}
}
if (open <close){
  return false;
}
else if (count==0){
  return true;
} else {
  return false;
}
}
alert (bracket(str));

//Написать калькулятор
var firstNum = parseFloat(prompt("Введите первое значение: "));
var operator = prompt("Введите операция (символ): ");
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