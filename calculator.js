let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let displayValue = document.getElementById("displayValue").innerHTML ;
let lastInput;
let currentInput;
let currentOperator = "";
let lastOperator = "";

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
    case "/":
      return divide(firstNumber,secondNumber);
  }
}

function sendToDisplay(value){
  if (firstNumber == 0 && lastOperator == "" && (value == "+" || value == "-" || value == "/" || value == "*")){
    firstNumber = parseFloat(displayValue);
    currentOperator = value;
    displayValue = 0;
    console.log("----------");
    console.log("1st");
    console.log("firstNumber:");
    console.log(firstNumber);
    console.log("secondNumber:");
    console.log(secondNumber);
    console.log("displayValue:");
    console.log(displayValue);
    console.log("currentOperator:");
    console.log(currentOperator);
    console.log("lastOperator:");
    console.log(lastOperator);
 }else if (secondNumber == 0 && lastOperator != "" && (value == "+" || value == "-" || value == "/" || value == "*")){
   displayValue = document.getElementById("displayValue").innerHTML;
   secondNumber = parseFloat(displayValue);
   firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
   document.getElementById("displayValue").innerHTML = firstNumber ;
   secondNumber = 0;
   displayValue = 0;
   lastOperator = "";
   currentOperator = value;
   console.log("----------");
   console.log("1.5nd")
   console.log("firstNumber:");
   console.log(firstNumber);
   console.log("secondNumber:");
   console.log(secondNumber);
   console.log("displayValue:");
   console.log(displayValue);
   console.log("currentOperator:");
   console.log(currentOperator);
   console.log("lastOperator:");
   console.log(lastOperator);
 }else if ((value == "+" || value == "-" || value == "/" || value == "*")){
    currentOperator = value;
    displayValue = 0;
    console.log("----------");
    console.log("2nd");
    console.log("firstNumber:");
    console.log(firstNumber);
    console.log("secondNumber:");
    console.log(secondNumber);
    console.log("displayValue:");
    console.log(displayValue);
    console.log("currentOperator:");
    console.log(currentOperator);
    console.log("lastOperator:");
    console.log(lastOperator);
  }else if (value == "=" && lastOperator == ""){
    document.getElementById("displayValue").innerHTML = 0;

  }else if (secondNumber == 0 && lastOperator != "" && value == "="){
    displayValue = document.getElementById("displayValue").innerHTML;
    secondNumber = parseFloat(displayValue);
    firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    document.getElementById("displayValue").innerHTML = firstNumber ;
    displayValue = 0;
    console.log("----------");
    console.log("3rd");
    console.log("firstNumber:");
    console.log(firstNumber);
    console.log("secondNumber:");
    console.log(secondNumber);
    console.log("displayValue:");
    console.log(displayValue);
    console.log("lastOperator:");
    console.log(lastOperator);

  }else if (value == "="){
    displayValue = document.getElementById("displayValue").innerHTML;
    firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    document.getElementById("displayValue").innerHTML = firstNumber ;
    displayValue = 0;
    console.log("----------");
    console.log("4th");
    console.log("firstNumber:");
    console.log(firstNumber);
    console.log("secondNumber:");
    console.log(secondNumber);
    console.log("displayValue:");
    console.log(displayValue);
    console.log("lastOperator:");
    console.log(lastOperator);

  }else if (displayValue == 0){
    document.getElementById("displayValue").innerHTML = value;
    displayValue = document.getElementById("displayValue").innerHTML;
    lastOperator = currentOperator;
    console.log("----------");
    console.log("5th");
    console.log("firstNumber:");
    console.log(firstNumber);
    console.log("secondNumber:");
    console.log(secondNumber);
    console.log("displayValue:");
    console.log(displayValue);
    console.log("lastOperator:");
    console.log(lastOperator);

 }else if (value >= 0 || value <10){
    document.getElementById("displayValue").innerHTML += parseFloat(value);
    displayValue = document.getElementById("displayValue").innerHTML;
    lastOperator = currentOperator;
        console.log("----------");
    console.log("6th");



  }
}
