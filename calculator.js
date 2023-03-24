let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function add(a,b) {
  return a+b;
}

function substract(a,b) {
  return a-b;
}

function multiply (a,b) {
  return a*b;
}

function divide (a,b) {
  return a/b;
}

function operate(operator,firstNumber,secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber,secondNumber);
      break;
    case "-":
      return substract(firstNumber,secondNumber);
      break;
    case "*":
      return multiply(firstNumber,secondNumber);
      break;
    case "*":
      return divide(firstNumber,secondNumber);
  }
}

function sendToDisplay(value){
  displayValue = document.getElementById("displayValue").innerHTML;
  if (displayValue == 0){
    document.getElementById("displayValue").innerHTML = value;
  }else{
    document.getElementById("displayValue").innerHTML += value;
  }
}
