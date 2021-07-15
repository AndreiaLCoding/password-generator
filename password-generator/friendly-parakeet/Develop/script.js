// Assignment code here
var numerics = ['0', '1', '2' , '3','4','5','6','7','8','9'];
var specialCharacters = ['!','"','#','$','%','&',"'",'&','(',')', '*', '+', ',','-','.','/',':',';','<','=','>','?','@','[',']', '^','_','`','{','|','}','~',];//special characters from : https://owasp.org/www-community/password-special-characters//
var UpperABCs=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var LowerABCs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function randomNum (min,max){
  var value = Math.floor(Math.random()) * (max-min + 1) + min);
  return value;
};

function createPassword(){
  var specialCharacters = []
  var password=[]
  var characterCount = 10;
  var characterCount = window.prompt ("Please select number of Characters between from 1 to 10")
  var characterCount = parseInt(characterCount)

  while (characterCount > 128 || characterCount <=8 || isNaN (characterCount)){
    alert('Please select a password between 8 and 28 characters.')
    characterCount = parseInt(characterCount)
  }
}

var yesToNum = window.confirm ('Would you like numbers in your password?');
var yesToSpecialCh= window.confirm ('Would you like special characters in your password?')
var yesToUpper = window.confirm('Would you want uppercase letters in your password?');
var yesToLower = window.confirm("Would you like lowercase letters in your password?")

if (yesToNum) {
  charac = charac.contact(specialCharacters)
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
