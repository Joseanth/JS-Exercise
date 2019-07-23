// for clear button
function clearSin() {
  document.getElementById("sinVal").value = "";
}

// validate
function validate() {
  // get value form input box and declare as variable:
  var sinNum = document.getElementById("sinVal").value;

  // adding background on alert message 
  var classPrimary = document.getElementById("message");
  console.log(classPrimary.classList);
  classPrimary.classList.add('alert-primary');

  // check field if empty
  if (sinNum == "") {
    document.getElementById("message").innerHTML = "Please enter SIN number!";
    return false;
  }

  // check if value is not number
  if (isNaN(sinNum)) {
    document.getElementById("message").innerHTML = "SIN must be number only!";
    return false;
  }

  // check if value is less than 9
  if (sinNum.length<9) {
    document.getElementById("message").innerHTML = "SIN must be 9 digit!";
    return false;
  }

  // check if value is greater than 9
  if (sinNum.length>9) {
    document.getElementById("message").innerHTML = "SIN must be 9 digit only!";
    return false;
  }

  // remove the check digit (the last digit):
  // var eightNum = sinNum.substring(0, sinNum.length - 1);
  lastDigit = sinNum.substring(8, 8 + 1);
  
  // Extract the 2nd, 4th, 6th and 8th digit:
  var eNumbers =  (sinNum.substring(1,1 + 1)) + (sinNum.substring(3,3 + 1))
    + (sinNum.substring(5,5 + 1)) + (sinNum.substring(7,7 + 1));

  // Extract the 1st, 3rd, 5th and 7th digit and add together:
  var oddNumbers = ((sinNum.substring(0,0 + 1)) * (1.0)  + (sinNum.substring(2,2 + 1)) * (1.0) 
    + (sinNum.substring(4, 4+1)) * (1.0) + (sinNum.substring(6,6 + 1)) * (1.0));
      
  var eNumSum = "";
  var eSum = 0;
  var sinNum = "";

  // double the digit and addd together
  for (var i = 0; i < eNumbers.length; i++) {
    var resEven = (eNumbers.substring(i, i + 1) * 2);
    eNumSum = eNumSum + resEven;
  }

  for (var i = 0; i < eNumSum.length; i++) {
    var resOdd = (eNumSum.substring(i, i + 1));
    eSum = ((eSum * 1.0) + (resOdd * 1.0));
  }

  checkNum = (oddNumbers + eSum);

  // to check if the total is multiple by 10
  if (checkNum <= 10) {
    (checkDigit = (10 - checkNum));
  }
  if (checkNum > 10 && checkNum <= 20) {
    (checkDigit = (20 - checkNum));
  }
  if (checkNum > 20 && checkNum <= 30) {
    (checkDigit = (30 - checkNum));
  }
  if (checkNum > 30 && checkNum <= 40) {
    (checkDigit = (40 - checkNum));
  }
  if (checkNum > 40 && checkNum <= 50) {
    (checkDigit = (50 - checkNum));
  }
  if (checkNum > 50 && checkNum <= 60) {
    (checkDigit = (60 - checkNum));
  }

  // show error if incorrect sin
  if (checkDigit != lastDigit) {
    var sinNum = document.getElementById("sinVal").value;
    document.getElementById("message").innerHTML = sinNum + "  is an invalid SIN!";
    return false;
  } else {
    var sinNum = document.getElementById("sinVal").value;
    document.getElementById("message").innerHTML = sinNum + " is a valid SIN";
  }	   

  /**
  * show result of even numbers
  * document.getElementById("message1").innerHTML = "SIN Number: " + eNumbers;
  * show result of odd numbers
  * document.getElementById("message2").innerHTML = "SIN Number: " + oddNumbers;
  * show result of if 38 for 123456782 sample sin
  * document.getElementById("message3").innerHTML = "SIN Number: " + checkDigit;
  */
}

// body background
document.body.style.backgroundColor = "#333";
document.body.style.paddingTop = "8%";