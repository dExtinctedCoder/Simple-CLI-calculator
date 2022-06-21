
alert("************ WELCOME TO THE CALCULATOR ************\n This Calculator can perform basic arithmetic operations: \n Addition(+), Substraction(-), Multiplication(*), Division(/), Modulus(%)");

calc = () => {
  
  const userFirstInput = parseInt(prompt("Enter First Number:"));
  const userSecondInput = parseInt(prompt("Enter Second Number:"));
  const userOperand = prompt("Enter operand:");
  
  if (userOperand == "+") {
    result = userFirstInput + userSecondInput;
    alert(String(userFirstInput) + " + " + String(userSecondInput) + " = " + String(result));
  }
  
  else if (userOperand == "-") {
    result = userFirstInput - userSecondInput;
    alert(String(userFirstInput) + " - " + String(userSecondInput) + " = " + String(result));
  }
  
  else if (userOperand == "*") {
    result = userFirstInput * userSecondInput
    alert(String(userFirstInput) + " * " + String(userSecondInput) + " = " + String(result));
  }
  
  else if (userOperand == "/") {
    result = userFirstInput / userSecondInput
    alert(String(userFirstInput) + " / " + String(userSecondInput) + " = " + String(result));
  }
  
  else if (userOperand == "%") {
    result = userFirstInput % userSecondInput
    alert(String(userFirstInput) + " % " + String(userSecondInput) + " = " + String(result));
  }
  
  else {
    alert("Invalid Operand input\nPlease try again.")
    calc();
  }
  
  retry = prompt("Do you want to perform another calculation?\n Y:(yes) N:(no)");
  
  if (retry == "y" || retry == "Y") {
    calc();
  }
  
  else if (retry == "n" || retry == "N") {
    alert("Thanks for your time! See you again.")
  }
  
  else {
    alert("Invalid Input");
  }
}

calc();




