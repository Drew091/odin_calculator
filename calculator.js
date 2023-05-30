let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let displayValue = document.getElementById("displayValue").innerHTML ;
let lastInput;
let currentInput;
let currentOperator = "";
let lastOperator = "";
let maxLength= 0;
let upToNCharacters;
let upToNCharactersDoubleCheck;

const keyPress = document.body;
keyPress.addEventListener("keydown", pressButton, false);

function pressButton(key) {
  let value;

  const charCode = key.keyCode;

  if (charCode === 13) {
    key.preventDefault();
  }


  value = (String.fromCharCode(key.keyCode));
  switch(true) {
    case (charCode==107):
      value ="+";
      break;
    case (charCode==109):
      value ="-";
      break;
    case (charCode==111):
      value ="/";
      break;
    case (charCode==106):
      value ="*";
      break;
    case (charCode==110):
      value =".";
      break;
    case (charCode==8):
      value ="DEL";
      break;
    case (charCode==67):
      value ="CLEAR";
      break;
    case (charCode==13):
      value ="=";
      break;
    case (charCode>=96 && charCode<=105):
      value = charCode-96;
  }

  sendToDisplay(value);
}

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

function roundResult(number){
  return Math.round(number*1000000000) / 1000000000;
}

function calcMaxLength(){
  upToNCharacters = document.getElementById("displayValue").innerHTML.substring(0, Math.min(document.getElementById("displayValue").innerHTML.length, maxLength));
  if(upToNCharacters.includes(".")){
    maxLength = 11;
  }else{
    maxLength = 10;
  }
}

function displayMaxLength(){
  upToNCharactersDoubleCheck = upToNCharacters.substring(0, Math.min(upToNCharacters.length, maxLength));
  if(upToNCharactersDoubleCheck.length == maxLength && upToNCharactersDoubleCheck.slice(-1) == "."){
  document.getElementById("displayValue").innerHTML = upToNCharactersDoubleCheck.slice(0, -1);
  }else{
  document.getElementById("displayValue").innerHTML = upToNCharactersDoubleCheck;
  }
}

function sendToDisplay(value){

   calcMaxLength();

  if (value == "CLEAR"){
    document.getElementById("displayValue").innerHTML = "0";
    displayValue = "0";
    currentOperator = "";
    lastOperator = "";
    firstNumber = 0;
    secondNumber = 0;
    document.getElementById("displayValueMultiplier").innerHTML = null;

  }else if (firstNumber == 0 && lastOperator == "" && (value == "+" || value == "-" || value == "/" || value == "*")){
    displayValue = document.getElementById("displayValue").innerHTML;
    firstNumber = parseFloat(displayValue);
    currentOperator = value;
    displayValue = "0";

 }else if (lastOperator != "" && (value == "+" || value == "-" || value == "/" || value == "*"|| value == "=" )){
   displayValue = document.getElementById("displayValue").innerHTML;
   secondNumber = parseFloat(displayValue);
   if((firstNumber > -1 || firstNumber < 1 ) && (firstNumber <= -0.00001 || firstNumber >= 0.00001)){
     firstNumber = parseFloat(roundResult(operate(lastOperator,firstNumber,secondNumber)));
   }else{
     firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
   }
   document.getElementById("displayValue").innerHTML = firstNumber;
   lastOperator = "";

   if(value != "="){
     secondNumber = 0;
     displayValue = "0";
     currentOperator = value;
   }

 }else if ((value == "+" || value == "-" || value == "/" || value == "*")){
    currentOperator = value;
    displayValue = "0";
    secondNumber = 0;

  }else if (value == "=" && currentOperator == "" && firstNumber == 0 && secondNumber == 0){
      document.getElementById("displayValue").innerHTML = parseFloat(displayValue);

  }else if (value == "=" && displayValue == "0"){
      document.getElementById("displayValue").innerHTML = firstNumber;

  }else if (currentOperator == lastOperator && value == "="){
    lastOperator = currentOperator;
    secondNumber = parseFloat(displayValue);
    if((firstNumber > -1 || firstNumber < 1 )&& (firstNumber <= -0.00001 || firstNumber >= 0.00001)){
      firstNumber = parseFloat(roundResult(operate(lastOperator,firstNumber,secondNumber)));
    }else{
      firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    }
    document.getElementById("displayValue").innerHTML = firstNumber;
    lastOperator = "";

  }else if (value == "="){
    lastOperator = currentOperator;
    displayValue = document.getElementById("displayValue").innerHTML;
    if((firstNumber > -1 || firstNumber < 1) && (firstNumber <= -0.00001 || firstNumber >= 0.00001)){
      firstNumber = parseFloat(roundResult(operate(lastOperator,firstNumber,secondNumber)));
    }else{
      firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    }
    document.getElementById("displayValue").innerHTML = firstNumber;
    lastOperator = "";

  }else if (displayValue == "0" && value !="DEL" && value !="." && (value == "+"
   || value == "-" || value == "/" || value == "*"|| value == "=" || value >= 0
   || value <10)){
    document.getElementById("displayValue").innerHTML = value;
    displayValue = document.getElementById("displayValue").innerHTML;
    lastOperator = currentOperator;
  }else if (displayValue != "0." && parseFloat(displayValue) != 0 && parseFloat(displayValue) == secondNumber && (value >= 0 || value <10)){
    document.getElementById("displayValue").innerHTML = 0;
    displayValue = "0";
    currentOperator = "";
    lastOperator = "";
    firstNumber = 0;
    secondNumber = 0;
    document.getElementById("displayValue").innerHTML = value;
    displayValue = value;
    lastOperator = currentOperator;
 }else if (displayValue.length < maxLength && parseFloat(displayValue) != secondNumber && (value >= 0 || value <10 )){
    document.getElementById("displayValue").innerHTML += value;
    displayValue = document.getElementById("displayValue").innerHTML;
    lastOperator = currentOperator;
  }else if (value >= 0 || value <10 ){
     document.getElementById("displayValue").innerHTML += value;
     displayValue = document.getElementById("displayValue").innerHTML;
     lastOperator = currentOperator;
  }else if ((firstNumber == 0 && secondNumber == 0 || lastOperator != "") && value == "DEL"){

     displayValue = document.getElementById("displayValue").innerHTML;
     displayValue = displayValue.slice(0, -1);
     document.getElementById("displayValue").innerHTML = displayValue;
     lastOperator = currentOperator;
     if(displayValue.length ==0){
       displayValue = "0";
       document.getElementById("displayValue").innerHTML = 0;
     }

   }else if (!displayValue.includes(".") && displayValue=="0" &&parseFloat(displayValue) != secondNumber &&  value == "."){
      document.getElementById("displayValue").innerHTML += value;
      displayValue = document.getElementById("displayValue").innerHTML;
      lastOperator = currentOperator;
    }else if (!displayValue.includes(".") && firstNumber==0  &&  value == "."){
       document.getElementById("displayValue").innerHTML += value;
       displayValue = document.getElementById("displayValue").innerHTML;
       lastOperator = currentOperator;
     }else if (!displayValue.includes(".") && displayValue == "0" &&  value == "."){
        document.getElementById("displayValue").innerHTML = "0" + value;
        displayValue = document.getElementById("displayValue").innerHTML;
        lastOperator = currentOperator;
      }else if (!displayValue.includes(".") &&  value == "."){
         document.getElementById("displayValue").innerHTML = "0" + value;
         displayValue = document.getElementById("displayValue").innerHTML;
         currentOperator = "";
         lastOperator = "";
         firstNumber = 0;
         secondNumber = 0;
  }

  calcMaxLength();

  if(firstNumber >9999999999){
    let i = 0;
    let displayValueMultiplied;
    do {
      displayValueMultiplied = firstNumber / Math.pow(10, i);
      i++;
    } while (displayValueMultiplied >= 1);

   document.getElementById("displayValueMultiplier").innerHTML = i-1;
   let multipliedResult =firstNumber/Math.pow(10, i-2);
   let multipliedResultString=multipliedResult.toString();
   let multipliedResultNumber = parseFloat(multipliedResultString.substring(0, Math.min(multipliedResultString.length, 11)));
   let multipliedResultNumberFixed = multipliedResultNumber.toString()
   document.getElementById("displayValue").innerHTML = multipliedResultNumberFixed;

  }else if( firstNumber> -0.00001 && firstNumber<0  &&firstNumber!=0){
    let i = 0;
    let displayValueMultiplied;
    do {
      displayValueMultiplied = firstNumber * Math.pow(10, i);
      i++;
    } while (displayValueMultiplied > -10);

   document.getElementById("displayValueMultiplier").innerHTML = -i + 2;
   let multipliedResult =firstNumber*Math.pow(10, i-2);
   let multipliedResultString=multipliedResult.toString();
   let multipliedResultNumber = parseFloat(multipliedResultString.substring(0, Math.min(multipliedResultString.length, 11)));
   let multipliedResultNumberFixed = multipliedResultNumber.toString()
   document.getElementById("displayValue").innerHTML = multipliedResultNumberFixed;

  }else if(firstNumber<0.00001 && firstNumber>0 &&firstNumber!=0){
    let i = 0;
    let displayValueMultiplied;
    do {
      displayValueMultiplied = firstNumber * Math.pow(10, i);
      i++;
    } while (displayValueMultiplied < 10);

   document.getElementById("displayValueMultiplier").innerHTML = -i + 2;
   let multipliedResult =firstNumber*Math.pow(10, i-2);
   let multipliedResultString=multipliedResult.toString();
   let multipliedResultNumber = parseFloat(multipliedResultString.substring(0, Math.min(multipliedResultString.length, 11)));
   let multipliedResultNumberFixed = multipliedResultNumber.toString()
   document.getElementById("displayValue").innerHTML = multipliedResultNumberFixed;
  }
}
