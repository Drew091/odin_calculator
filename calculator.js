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
let decimal;

const keyPress = document.body;
keyPress.addEventListener("keydown", pressButton, false);

function pressButton(key) {
  console.log("pressButton");
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
  console.log(`charCode: ${charCode}\n`);
  console.log(value);
  console.log("+++++++++++");

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
  console.log("calcMaxLength");
  upToNCharacters = document.getElementById("displayValue").innerHTML.substring(0, Math.min(document.getElementById("displayValue").innerHTML.length, maxLength));
  if(upToNCharacters.includes(".")){
    maxLength = 11;
  }else{
    maxLength = 10;
  }
  console.log(maxLength);
}

function displayMaxLength(){
  console.log("displayMaxLength");
  upToNCharactersDoubleCheck = upToNCharacters.substring(0, Math.min(upToNCharacters.length, maxLength));
  if(upToNCharactersDoubleCheck.length == maxLength && upToNCharactersDoubleCheck.slice(-1) == "."){
  document.getElementById("displayValue").innerHTML = upToNCharactersDoubleCheck.slice(0, -1);
  }else{
  document.getElementById("displayValue").innerHTML = upToNCharactersDoubleCheck;
  }
  console.log(upToNCharactersDoubleCheck);
}

function sendToDisplay(value){
  console.log("sendToDisplay");

   calcMaxLength();

  if (value == "CLEAR"){
    document.getElementById("displayValue").innerHTML = "0";
    displayValue = "0";
    currentOperator = "";
    lastOperator = "";
    firstNumber = 0;
    secondNumber = 0;
    document.getElementById("displayValueMultiplier").innerHTML = null;
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
    displayValue = document.getElementById("displayValue").innerHTML;
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
    secondNumber = 0;
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
  }else if (value == "=" && currentOperator == "" && firstNumber == 0 && secondNumber == 0){
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
    if((firstNumber > -1 || firstNumber < 1 )&& (firstNumber <= -0.00001 || firstNumber >= 0.00001)){
      firstNumber = parseFloat(roundResult(operate(lastOperator,firstNumber,secondNumber)));
    }else{
      firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    }
    document.getElementById("displayValue").innerHTML = firstNumber;
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
    if((firstNumber > -1 || firstNumber < 1) && (firstNumber <= -0.00001 || firstNumber >= 0.00001)){
      firstNumber = parseFloat(roundResult(operate(lastOperator,firstNumber,secondNumber)));
    }else{
      firstNumber = parseFloat(operate(lastOperator,firstNumber,secondNumber));
    }
    document.getElementById("displayValue").innerHTML = firstNumber;
    lastOperator = "";
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
    console.log("decimal:");
    console.log(decimal);

  }else if (displayValue == "0" && value !="DEL" && value !="." && (value == "+"
   || value == "-" || value == "/" || value == "*"|| value == "=" || value >= 0
   || value <10)){
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
 }else if (displayValue.length < maxLength && parseFloat(displayValue) != secondNumber && (value >= 0 || value <10 )){
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
  }else if (value >= 0 || value <10 ){
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

   }else if (!displayValue.includes(".") && displayValue=="0" &&parseFloat(displayValue) != secondNumber &&  value == "."){
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
    }else if (!displayValue.includes(".") && firstNumber==0  &&  value == "."){
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
     }else if (!displayValue.includes(".") && displayValue == "0" &&  value == "."){
        document.getElementById("displayValue").innerHTML = "0" + value;
        displayValue = document.getElementById("displayValue").innerHTML;
        lastOperator = currentOperator;
        console.log("----------");
        console.log("14th");
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
      }else if (!displayValue.includes(".") &&  value == "."){
         document.getElementById("displayValue").innerHTML = "0" + value;
         displayValue = document.getElementById("displayValue").innerHTML;
         currentOperator = "";
         lastOperator = "";
         firstNumber = 0;
         secondNumber = 0;
         console.log("----------");
         console.log("15th");
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

  calcMaxLength();
//  displayMaxLength();

  if(firstNumber >9999999999){
    let i = 0;
    let displayValueMultiplied;
    do {
      displayValueMultiplied = firstNumber / Math.pow(10, i);
      console.log("displayValueMultiplied");
      console.log(displayValueMultiplied);
      i++;
    } while (displayValueMultiplied >= 1);

   document.getElementById("displayValueMultiplier").innerHTML = i-1;
   let multipliedResult =firstNumber/Math.pow(10, i-2);
   console.log("multipliedResult");
   console.log(multipliedResult);
   let multipliedResultString=multipliedResult.toString();
   console.log("multipliedResultString");
   console.log(multipliedResultString);
   let multipliedResultNumber = parseFloat(multipliedResultString.substring(0, Math.min(multipliedResultString.length, 11)));
   console.log("multipliedResultNumber");
   console.log(multipliedResultNumber);
   let multipliedResultNumberFixed = multipliedResultNumber.toString()
   console.log("multipliedResultNumberFixed");
   console.log(multipliedResultNumberFixed);
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
   console.log("multipliedResult");
   console.log(multipliedResult);
   let multipliedResultString=multipliedResult.toString();
   console.log("multipliedResultString");
   console.log(multipliedResultString);
   let multipliedResultNumber = parseFloat(multipliedResultString.substring(0, Math.min(multipliedResultString.length, 11)));
   console.log("multipliedResultNumber");
   console.log(multipliedResultNumber);
   let multipliedResultNumberFixed = multipliedResultNumber.toString()
   console.log("multipliedResultNumberFixed");
   console.log(multipliedResultNumberFixed);
   document.getElementById("displayValue").innerHTML = multipliedResultNumberFixed;

  }else if(firstNumber<0.00001 && firstNumber>0 &&firstNumber!=0){
    let i = 0;
    let displayValueMultiplied;
    do {
      displayValueMultiplied = firstNumber * Math.pow(10, i);
      console.log("displayValueMultiplied-3");
      console.log(displayValueMultiplied);
      i++;
    } while (displayValueMultiplied < 10);

   document.getElementById("displayValueMultiplier").innerHTML = -i + 2;
   let multipliedResult =firstNumber*Math.pow(10, i-2);
   console.log("multipliedResult-3");
   console.log(multipliedResult);
   let multipliedResultString=multipliedResult.toString();
   console.log("multipliedResultString-3");
   console.log(multipliedResultString);
   let multipliedResultNumber = parseFloat(multipliedResultString.substring(0, Math.min(multipliedResultString.length, 11)));
   console.log("multipliedResultNumber-3");
   console.log(multipliedResultNumber);
   let multipliedResultNumberFixed = multipliedResultNumber.toString()
   console.log("multipliedResultNumberFixed-3");
   console.log(multipliedResultNumberFixed);
   document.getElementById("displayValue").innerHTML = multipliedResultNumberFixed;
  }

}
