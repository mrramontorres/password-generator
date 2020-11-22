// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Establish a string of all potential characters for each category (lowercase, uppercase, numerical, special).
var lowerStr = "abcdefghijklmnopqurstuvwxyz";
var upperStr = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numericStr = "0123456789";
var specialStr = "!#$%&()*+:;<>?@^_{}~";

function generatePassword() {
  // User selects password length.
  var length = parseInt(prompt("Please choose a password length. This must be an integer between 8 and 128."));

  // Check that user has entered an integer and a length between 8 and 129.
  while ( isNaN(length) || length < 8 || length > 129) {
    var length = prompt("Uh oh! You did not choose an integer or appropriate password length. Please choose a whole number between 8 and 128.");
  }

  // User selects which character types to include and selections are validated.
  var lower = confirm("Click OK to include lowercase characters in your password.");
  if (lower === true) {
    alert("You password WILL include lowercase characters.");
    } else {
    alert("NO lowercase characters will be included.");
  } 
  
  var upper = confirm("Click OK to include uppercase characters in your password.");
  if (upper === true) {
    alert("You password WILL include uppercase characters.");
    } else {
    alert("NO uppercase characters will be included.");
  } 
  
  var numeric = confirm("Click OK to include numerical characters in your password.");
  if (numeric === true) {
    alert("You password WILL include numerical characters.");
    } else {
    alert("NO numerical characters will be included.");
  } 
  
  var special = confirm("Click OK to include special characters, (! # $ % & ( ) * + : ; < > ? @ ^ _ { } ~), in your password.");
  if (special === true) {
    alert("You password WILL include special characters.");
    } else {
    alert("NO special characters will be included.");
  } 

  // Check that user chooses at least one of the following types of characters to include in generated password.
  while (lower === false && upper === false && numeric === false &&  special === false) {
    alert("You must choose at least 1 out of the 4 character types in order to generate a password.");

    var lower = confirm("Click OK if you want your password to include lowercase characters?");
    if (lower === true) {
      alert("You password WILL include lowercase characters.");
      } else {
      alert("NO lowercase characters will be included.");
    } 

    var upper = confirm("Click OK to include uppercase characters in your password.");
    if (upper === true) {
      alert("You password WILL include uppercase characters.");
      } else {
      alert("NO uppercase characters will be included.");
    } 

    var numeric = confirm("Click OK to include numerical characters in your password.");
    if (numeric === true) {
      alert("You password WILL include numerical characters.");
      } else {
      alert("NO numerical characters will be included.");
    }

    var special = confirm("Click OK to include special characters, (! # $ % & ( ) * + : ; < > ? @ ^ _ { } ~), in your password.");
      if (special === true) {
        alert("You password WILL include special characters.");
        } else {
        alert("NO special characters will be included.");
    } 
  }

  // Convert the selected character types chosen by user into to strings.
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

  // Combine selected character types into one string.
  var newStr = "";
  var comboStr = newStr.concat(lower, upper, numeric, special);

  // Generate random string of 'length' length using newStr.
  var password = "";
  var comboStrLength = comboStr.length;
  for ( var i = 0; i < length; i++ ) {
    password += comboStr.charAt(Math.floor(Math.random() * comboStrLength)); 
  }

  return password;
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
