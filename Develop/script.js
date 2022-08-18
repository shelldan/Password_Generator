var characterLenght = 8; //initial value 
var choiceSelect = [];

// doesn't support \ " '
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '`', '~', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '?', '/' ];
var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Assignment Code
var generateBtn = document.querySelector("#generate"); // target at generate ID (html)

// define generatePassword() function based on the prompts
function generatePassword(){
  var password = '';
  for(var i = 0; i< characterLenght; i++){
    var randomIndex = Math.floor(Math.random() * choiceSelect.length);
    password = password + choiceSelect[randomIndex];
  }
  return password;
}

// define passwowrdPrompt function
function passwowrdPrompt(){
  choiceSelect = [];

  characterLenght = parseInt(prompt("How long do you want your password to be (8-128 characters)?")); // redefine the variable 

  if(isNaN(characterLenght) || characterLenght <8 || characterLenght >128) { // all false scenarios
    alert("Please enter valid number (8-128)!")
    return false; // stop the function 
  }

  if(confirm("Click OK if you would like lowercase letters in your passwords.")){
    choiceSelect = choiceSelect.concat(lowerCase);
  }
  if(confirm("Click OK if you would like uppercase letters in your passwords.")){
    choiceSelect = choiceSelect.concat(upperCase);
  }
  if(confirm("Click OK if you would like special characters in your passwords.")){
    choiceSelect = choiceSelect.concat(specialCharacter);
  }
  if(confirm("Click OK if you would like numbers in your passwords.")){
    choiceSelect = choiceSelect.concat(numberList);
  }
  return true;

}

// Write password to the #password input
function writePassword() {
  var returnPrompt = passwowrdPrompt(); // returns either true of false
  var passwordText = document.querySelector("#password"); // target at password id (html)

  if(returnPrompt) {
    var newPassword = generatePassword(); //need to write the generatePassword function, after defining the generatePassword function, the value is store at "password" variable 
    
    // start your code here: 
    passwordText.value = newPassword; // the password value is pumped into the page and displayed on the page 
  } else{
    passwordTest.value = '';

  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // when click, it will call the writePassword function
