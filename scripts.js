alert("**********WELCOME TO THE CALCULATOR**********");
alert("This app performs basic arithmetic calculations:\n Addition, Substraction, Multiplication, Divivsion")



calcFunx = ()=> {

  userFirstInput = prompt("Enter First Number: ")
  userSecondInput = prompt("Enter Second Number: ")
  userOperandInput = prompt("Enter Operand: ")
  
  if (userOperandInput == '+') {
    result = userFirstInput + userSecondInput;
    alert(String(userFirstInput) + ' + ' + String(userSecondInput) + ' = ' + String(result));
  }

  else if (userOperandInput == '-') {
    result = userFirstInput - userSecondInput
    alert(String(userFirstInput) + ' - ' + String(userSecondInput) + ' = ' + String(result));
  }

  else if (userOperandInput == '*') {
    result = userFirstInput * userSecondInput
    alert(String(userFirstInput) + ' *' + String(userSecondInput) + ' = ' + String(result));
  }

  else if (userOperandInput == '/') {
    result = userFirstInput / userSecondInput
    alert(String(userFirstInput) + ' / ' + String(userSecondInput) + ' = ' + String(result));
  }

  else if (userOperandInput == '%') {
    result = userFirstInput % userSecondInput
    alert(String(userFirstInput) + ' % ' + String(userSecondInput) + ' = ' + String(result));
  }

  retry = prompt("Do you wish to perform another calculation?\n Y(yes) N(no)");

  if (retry == 'y' || retry == 'Y' ) {
    calcFunx();
  }

  else if (retry == 'n' || retry == 'N' ) {
    alert("Thanks for your time! See you again");
  }
}

calcFunx();


