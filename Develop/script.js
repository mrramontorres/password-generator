// Assignment Code.
var generateBtn = document.querySelector("#generate");

//Establishes charter type arrays.
var lowerStr = "abcdefghijklmnopqurstuvwxyz";
var upperStr = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numericStr = "0123456789";
var specialStr = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  //User selects password length.
  var length = parseInt(prompt("Please choose a password character length between 8 and 128."));

  //Check user has entered a password length between 8 and 129 as well as an integer.
  while ( isNaN(length) || length < 8 || length > 129) {
    var length = prompt("You did not choose an appropriate character length or type. Please choose a password length between 8 and 128.");
  }
  console.log(length);
  
  //User selects which password characters to include.
  var lower = confirm("Click OK if you want your password to include lowercase characters.");
  console.log(lower);
  var upper = confirm("Click OK if you your password to include uppercase characters.");
  console.log(upper);
  var numeric = confirm("Click OK if you your password to include numerical characters.");
  console.log(numeric);
  var special = confirm("Click OK if you your password to include special characters.");
  console.log(special);


  //Check that user chooses at least one of the following types of characters to include in generated password.
  while (lower === false && upper === false && numeric === false &&  special === false) {
    alert("You must choose at least 1 out of the 4 character types in order to generate a password.");
    var lower = confirm("Click OK if you want your password to include lowercase characters?");
    var upper = confirm("Click OK if you your password to include uppercase characters.");
    var numeric = confirm("Click OK if you your password to include numerical characters.");
    var special = confirm("Click OK if you your password to include special characters.");
  }

  //Convert selected variables that are true to a string else.
  if (lower === true) {
    var lower = lowerStr;
    } else {
    var lower = "";
  } 

  if (upper === true) {
    var upper = upperStr;
    } else {
    var upper = "";
  }

  if (numeric === true) {
    var numeric = numericStr;
    } else {
    var numeric = "";
  }

  if (special === true) {
    var special = specialStr;
    } else {
    var special = "";
  }

  //Combine selected character types into one string.
  var Str = "";
  var newStr = Str.concat(lower, upper, numeric, special);

  return length;
  
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
