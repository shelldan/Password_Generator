var characterLenght = 8;
var choiceArr = [];

// doesn't support \ " '
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '`', '~', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '?', '/' ];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Assignment Code
var generateBtn = document.querySelector("#generate"); // target at generate ID (html)

// define generatePassword() function based on the prompts
function generatePassword(){
  var password = '';
  for(var i = 0; i< characterLenght; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// define getPrompts function
function getPrompts(){
  choiceArr = [];

  characterLenght = parseInt(prompt("How many characters do you want your password to be (8-128)?"));

  if(isNaN(characterLenght) || characterLenght <8 || characterLenght >128) { // all false scenarios
    alert("Character length has to be a number, 8 - 128 digits. please try again.")
    return false; // stop the function 
  }

  if(confirm("would you like lowercase letters in your passwords?")){
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if(confirm("would you like uppercase letters in your passwords?")){
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if(confirm("would you like special characters in your passwords?")){
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if(confirm("would you like numbers in your passwords?")){
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;

}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // returns either true of false
  var passwordText = document.querySelector("#password"); // target at password id (html)

  if(correctPrompts) {
    var newPassword = generatePassword(); //need to write the generatePassword function, after defining the generatePassword function, the value is store at "password" variable 
    
    // start your code here: 
    passwordText.value = newPassword; // the password value is pumped into the page and displayed on the page 
  } else{
    passwordTest.value = '';

  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // when click, it will call the writePassword function
