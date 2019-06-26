document.getElementById("button").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "flex";
})
 
document.getElementById("close").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
})

function clearFields() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('age').value = '';
  document.getElementById('emailAddress').value = '';
}

// call form from button
function addRow() {
  // get input values
  var currentTimeNow = document.getElementById('currentTime').innerHTML;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var age = document.getElementById('age').value;
  var emailAddress = document.getElementById('emailAddress').value;
  
  if (firstName == null || firstName == "") {
    emailError = "<div class='alert alert-danger pt-1 pb-1' role='alert'>Enter first name</div>"; 
    document.getElementById("message").innerHTML = emailError;
    return false;
  } 

  if (lastName == null || lastName == "") {
    emailError = "<div class='alert alert-danger pt-1 pb-1' role='alert'>Enter last name</div>"; 
    document.getElementById("message").innerHTML = emailError;
    return false;
  }
  
  if (age == null || age == "") {
    emailError = "<div class='alert alert-danger pt-1 pb-1' role='alert'>Enter age</div>"; 
    document.getElementById("message").innerHTML = emailError;
    return false;
  }
  
  if (isNaN(age)) {
    emailError = "<div class='alert alert-danger pt-1 pb-1' role='alert'>Age must be enter in number</div>"; 
    document.getElementById("message").innerHTML = emailError;
    return false;
  }
  
  if (emailAddress == null || emailAddress == "") {
    emailError = "<div class='alert alert-danger pt-1 pb-1' role='alert'>Enter email address</div>"; 
    document.getElementById("message").innerHTML = emailError;
    return false;
  }

  // validate email address
  var addAt = emailAddress.indexOf("@");
  var addDot = emailAddress.lastIndexOf(".");
  if (addAt<1 || addDot<addAt+2 || addDot+2>=emailAddress.length) {
    emailError = "<div class='alert alert-danger pt-1 pb-1' role='alert'>Invalid email address</div>"; 
    document.getElementById("message").innerHTML = emailError;
    return false;
  }


  var table = document.getElementsByTagName('table')[0];
  var newRow = table.insertRow(1);
  
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);

  cel1.innerHTML = currentTimeNow;
  cel2.innerHTML = firstName;
  cel3.innerHTML = lastName;
  cel4.innerHTML = age;
  cel5.innerHTML = emailAddress;

  addSuccessFully = "<div class='alert alert-primary pt-1 pb-1' role='alert'>One row added!</div>";
  document.getElementById("message").innerHTML = addSuccessFully;

}



