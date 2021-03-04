// Assignment Code
var generateBtn = document.querySelector("#generate");
//An arrays to hold the characters of the password...
const finalPassword = [];
const specialCharacter = ['!', '@', '#', '$', '%', '&', '*'];
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
function generatePassword(){

  let passLength = prompt("Please enter the desired length of your new pasword, it must be 8-125 characters to be valid");
  let lengthCheck = passLenghtCheck(passLength);

  //Keeps reprompting user to enter approprite input so that they can move on to the next choice...
  while (lengthCheck == false){
    passLength = prompt("Please enter the desired length of your new pasword, it must be 8-125 characters to be valid");
    let lengthCheck = passLenghtCheck(passLength);
    if (lengthCheck == true){
      break;
    }
  }
  //sets the length of the password to one chosen by the user...
  finalPassword.length = parseInt(passLength);

  let userCharacter = prompt(`please enter your disired special character, please note that it must only include one of the follwing symbols (${specialCharacter})`);
  let charCheck = characterCheck(userCharacter);

  //Keeps reprompting user to enter approprite input so that they can move on to the next choice...
  while (charCheck == false){
    userCharacter = prompt(`please enter your disired special characters, please note that it must only include one of the follwing symbols (${specialCharacter})`);
    let charCheck = characterCheck(userCharacter);
    if (charCheck == true){
      break;
    }
  }

  //places the user character somehwere random in the final password array...
  finalPassword[Math.floor(Math.random() * finalPassword.length)] = userCharacter;

  //Fills in the rest of the space with random characters
  for (var i = 0; i < finalPassword.length; i++){
    if (finalPassword[i] === undefined){
      finalPassword[i] = randomLetter();
    }
  }
  //creats a string from the random the array finalPassword[]...
  let result = finalPassword.join('');
  return result;
}

// A function to make sure that the number of character chosen by the user is within the accepted parameters
function passLenghtCheck(input){
  let length = parseInt(input);
  if (isNaN(length) == true ){
    alert(`Please enter an intiger value, "${input}" is not a number!`);
  }else{
    if (length < 8){
      alert('PASSWORD LENGTH NEEDS TO BE LONGER THAN 8 CHARACTERS!!!!');
      return false;
    }else if (length > 125){
      alert('PASSWORD LENGTH NEEDS TO BE SHOTER THAN 125 CHARACTERS!!!!');
      return false;
    }else{
      return true;
    }
  }
}

//A function to make sure that an approprite character was chosen by the user...
function characterCheck(input){
  let choice = specialCharacter.indexOf(input);
  if (choice == -1){
    return false;
  }else{
    return true;
  }

}

//A function to return random letters...
function randomLetter(){
  return characters[Math.floor(Math.random() * characters.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
