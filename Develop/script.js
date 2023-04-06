// Assignment Code
var generateBtn = document.querySelector("#generate");
let lCase='abcdefghijklmnopqrstuvwxyz'.split('');
let uCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let nums='1234567890'.split('');
let sChars=("'"+' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~').split('');


function userPrompt(){    //get password specifications

  let len=window.prompt("How many characters long would you like your password to be?\nmin:8\nmax128");
  
  //check if length is valid
  if(isNaN(len)||+len>128||+len<8){
    window.alert("invalid input, please try again...")
    return userPrompt();
    
  }
  let upper=window.confirm("Would you like the password to contain uppercase characters?  (ABCD...)");
  let lower=window.confirm("Would you like the password to contain lowercase characters?  (abcd...)");
  let num=window.confirm("Would you like the password to contain numeric characters?  (1234...)");
  let spec=window.confirm("Would you like the password to contain special characters?  (!@#$...)")

  if(upper==false&&lower==false&&num==false&&spec==false){
    window.alert("Picky, arent we?\n\n You must select at least one character type for use in password");
    return userPrompt();
    
  }

  return generatePassword(len,upper,lower, num, spec);
}



function generatePassword(len,upper,lower, num, spec){
  let password =[];
  let charSet=[];
  
  //creates the pool of random character to draw from & ensures password has at least one of each type of selected character 
  if(upper){
    charSet=charSet.concat(uCase);
    password.push(uCase[Math.floor(Math.random()*uCase.length)]);
  }
  if(lower){
    charSet=charSet.concat(lCase);
    password.push(lCase[Math.floor(Math.random()*lCase.length)]);
  }
  if(num){
    charSet=charSet.concat(nums);
    password.push(nums[Math.floor(Math.random()*nums.length)]);
  }
  if(spec){
    charSet=charSet.concat(sChars);
    password.push(sChars[Math.floor(Math.random()*sChars.length)]);
  }



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
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page