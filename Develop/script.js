// Assignment Code.
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //User selects password length.
  var length = prompt("Please choose a password character length between 8 and 128.");

  //Check user has selected correct password length.
  while (length < 8 || length > 129) {
    var length = prompt("You did not choose an appropriate character length. Please choose a password character length between 8 and 128.");
  }

  console.log(length);
  
  //User chooses type of characters to include in generated password.
  var lower = confirm("Click OK if you want your password to include lowercase characters?");
  var upper = confirm("Click OK if you your password to include uppercase characters?");
  var numeric = confirm("Click OK if you your password to include numerical characters?");
  var special = confirm("Click OK if you your password to include special characters?");
  
  console.log(lower);
  console.log(upper);
  console.log(numeric);
  console.log(special);

  return length;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
