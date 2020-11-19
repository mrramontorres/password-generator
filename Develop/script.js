// Assignment Code.
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  //Present Criteria.
  alert("Please select from the following prompts what you would like your random password to include. Click OK for yes and CANCEL for no.");
  
  //Gather password variables.
  var lower = confirm("Do you want your password to include lowercase characters?");
  var upper = confirm("Do you want your password to include uppercase characters?");
  var numeric = confirm("Do you want your password to include numerical characters?");
  var special = confirm("Do you want your password to include special characters?");
  
  console.log(lower);
  console.log(upper);
  console.log(numeric);
  console.log(special);

  //User selets password length.
  var length = prompt("Please choose a password character length between 8 and 128.");

  //Check user has selected correct password length.
  while (length < 8 || length > 129) {
    var length = prompt("You did not choose an appropriate character length. Please try a password character length between 8 and 128.");
  }
  console.log(length);



  var pw = "ramon";
  return pw;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
