// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  var passwordLength = parseInt(prompt('Enter how many characters you want your password to be (between 8 and 128).'));
  // Validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password length (Must be between 8 and 128 characters).');
    passwordLength = parseInt(prompt('Enter how many characters you want your password to be (between 8 and 128).'));
}

// Prompt for character types
var includeLowercase=confirm('Include lowercase characters?');
var includeUppercase=confirm('Include uppercase characters?');
var includeNumeric=confirm('Include numeric characters?');
var includeSpecial=confirm('Include special characters?');

  // Validate at least one character type is selected
}
// Store user choices in an options object

// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword() {
  // User canceled or entered invalid input
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);