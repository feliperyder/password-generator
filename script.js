// Password Generator Script
// This script allows users to generate secure passwords with various options.
// Author: Philip Hurst

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  var passwordLength = parseInt(prompt('Enter how many characters you want your password to be (between 8 and 128).'));
  
  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return;
  }

  // Prompt for character types
  var includeLowercase=confirm('Include lowercase characters?');
  var includeUppercase=confirm('Include uppercase characters?');
  var includeNumeric=confirm('Include numeric characters?');
  var includeSpecial=confirm('Include special characters?');

  // Validate at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert('Please select at least one character type.');
    return { isValid: false };
  }

  // Store user choices in an options object
  var passwordOptions = {
    length:passwordLength,
    includeLowercase:includeLowercase,
    includeUppercase:includeUppercase,
    includeNumeric:includeNumeric,
    includeSpecial:includeSpecial
  };

  return passwordOptions
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
  // User canceled or entered invalid input
  return;
  }

  var selectedCharacters=[];
  var password='';

  if (options.includeLowercase) {
    selectedCharacters = selectedCharacters.concat(lowerCaseCharacters);
  }

  if (options.includeUppercase) {
    selectedCharacters = selectedCharacters.concat(upperCaseCharacters);
  }

  if (options.includeNumeric) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }

  if (options.includeSpecial) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    password += getRandom(selectedCharacters);
  }

  return password;
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