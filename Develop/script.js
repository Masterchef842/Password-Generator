// Assignment Code
var generateBtn = document.querySelector("#generate");
let lCase='abcdefghijklmnopqrstuvwxyz'.split('');
let uCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let nums='1234567890'.split('');
let sChars=("'"+' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~').split('');


function userPrompt(){    //get password specifications

  let len=window.prompt("How many characters long would you like your password to be?\nmin:8\nmax128");
  console.log(typeof len);
  
  //check if length is valid
  if(isNaN(len)||+len>128||+len<8){
    window.alert("invalid input, please try again...")
    userPrompt();
    return;
  }
  let upper=window.confirm("Would you like the password to contain uppercase characters?  (ABCD...)");
  let lower=window.confirm("Would you like the password to contain lowercase characters?  (abcd...)");
  let num=window.confirm("Would you like the password to contain numeric characters?  (1234...)");
  let spec=window.confirm("Would you like the password to contain special characters?  (!@#$...)")

  return generatePassword(len,upper,lower, num, spec);
}



function generatePassword(len,upper,lower, num, spec){
  let password =[];
  let charSet=[];
  if(upper)
    charSet=charSet.concat(uCase);
  if(lower)
    charSet=charSet.concat(lCase);
  if(num)
    charSet=charSet.concat(nums);
  if(spec)
    charSet=charSet.concat(sChars);

  while(password.length<len){
    password.push(charSet[Math.floor(Math.random()*charSet.length)])
  }
  return password.join('');
}



// Write password to the #password input
function writePassword() {
  var password = userPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page