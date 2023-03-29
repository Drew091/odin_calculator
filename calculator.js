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
  if (value == "CLEAR"){
    document.getElementById("displayValue").innerHTML = 0;
    displayValue = "0";
    currentOperator = "";
    lastOperator = "";
    firstNumber = 0;
    secondNumber = 0;
    console.log("----------");
    console.log("Clear");
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
  }else if (firstNumber == 0 && lastOperator == "" && (value == "+" || value == "-" || value == "/" || value == "*")){
    firstNumber = parseFloat(displayValue);
    currentOperator = value;
    displayValue = "0";
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
 }else if (lastOperator != "" && (value == "+" || value == "-" || value == "/" || value == "*")){
   displayValue = document.getElementById("displayValue").innerHTML;
   secondNumber = parseFloat(displayValue);
   firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
   document.getElementById("displayValue").innerHTML = firstNumber ;
   secondNumber = 0;
   displayValue = "0";
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
    displayValue = "0";
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
  }else if (value == "=" && firstNumber == 0 && secondNumber == 0){
      document.getElementById("displayValue").innerHTML = parseFloat(displayValue);
      console.log("----------");
      console.log("3rd");
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
  }else if (value == "=" && displayValue == "0"){
      document.getElementById("displayValue").innerHTML = firstNumber;
      console.log("----------");
      console.log("4th");
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
  }else if (currentOperator == lastOperator && value == "="){
    lastOperator = currentOperator;
    secondNumber = parseFloat(displayValue);
    firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    document.getElementById("displayValue").innerHTML = firstNumber ;
    lastOperator = "";
    console.log("----------");
    console.log("5th");
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

  }else if (value == "="){
    lastOperator = currentOperator;
    displayValue = document.getElementById("displayValue").innerHTML;
    firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    document.getElementById("displayValue").innerHTML = firstNumber ;
    lastOperator = "";
    //secondNumber = 0;
    console.log("----------");
    console.log("6th");
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

  }else if (displayValue == "0" && value !="DEL" && value !="."){
    document.getElementById("displayValue").innerHTML = value;
    displayValue = document.getElementById("displayValue").innerHTML;
    lastOperator = currentOperator;
    console.log("----------");
    console.log("7th");
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
  }else if (displayValue != "0." && parseFloat(displayValue) == secondNumber && (value >= 0 || value <10)){
    document.getElementById("displayValue").innerHTML = 0;
    displayValue = "0";
    currentOperator = "";
    lastOperator = "";
    firstNumber = 0;
    secondNumber = 0;
    document.getElementById("displayValue").innerHTML = value;
    displayValue = value;
    lastOperator = currentOperator;
    console.log("----------");
    console.log("8th");
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
 }else if (parseFloat(displayValue) != secondNumber && (value >= 0 || value <10 )){
    document.getElementById("displayValue").innerHTML += value;
    displayValue = document.getElementById("displayValue").innerHTML;
    lastOperator = currentOperator;
    console.log("----------");
    console.log("9th");
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
  }else if (displayValue == "0." && (value >= 0 || value <10 )){
     document.getElementById("displayValue").innerHTML += value;
     displayValue = document.getElementById("displayValue").innerHTML;
     lastOperator = currentOperator;
     console.log("----------");
     console.log("10th");
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
  }else if ((firstNumber == 0 && secondNumber == 0 || lastOperator != "") && value == "DEL"){

     displayValue = document.getElementById("displayValue").innerHTML;
     displayValue = displayValue.slice(0, -1);
     document.getElementById("displayValue").innerHTML = displayValue;
     lastOperator = currentOperator;
     if(displayValue.length ==0){
       displayValue = "0";
       document.getElementById("displayValue").innerHTML = 0;
     }
     console.log("----------");
     console.log("11th");
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

   }else if (!displayValue.includes(".") && parseFloat(displayValue) != secondNumber &&  value == "."){
      document.getElementById("displayValue").innerHTML += value;
      displayValue = document.getElementById("displayValue").innerHTML;
      lastOperator = currentOperator;
      console.log("----------");
      console.log("12th");
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
    }else if (!displayValue.includes(".") && displayValue == "0" &&  value == "."){
       document.getElementById("displayValue").innerHTML += value;
       displayValue = document.getElementById("displayValue").innerHTML;
       lastOperator = currentOperator;
       console.log("----------");
       console.log("13th");
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

  }
}
