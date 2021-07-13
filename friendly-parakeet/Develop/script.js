//Late submission//needed help from tutor

// Assignment code here
var numerics = ['0', '1', '2' , '3','4','5','6','7','8','9'];
var specialCharacters = ['!','"','#','$','%','&',"'",'&','(',')', '*', '+', ',','-','.','/',':',';','<','=','>','?','@','[',']', '^','_','`','{','|','}','~',];
//special characters from : https://owasp.org/www-community/password-special-characters//
var UpperABCs=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var LowerABCs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function randomNum (min,max) {
  
  var value = Math.floor(Math.random() * (max-min + 1) + min);
  return value;
};

function createPassword(){
  var charac = [];
  var password=[]; // Arrays are a collection

  // Datatypes
  // Numbers, Strings, Boolean, Arrays, Objects
  // [0 ,45, 12, 51, 32], ['blue', 'red, 'yellow']
/*
  var myObject  = {
    key1: "valueA",
    color: "blue"
  }

  myObject.color

*/

  /*

   var myArray = [
    {
      key1: "valueA",
      color: "blue"
    },
    {
      key1: "valueB",
      color: "red"
    }
   ]

   show "blue"

   myArray[0].color

  */

  // by default, window.prompt returns a string data type
  var characterCount = window.prompt ("Please select number of Characters between from 1 to 10")
  // if the user typed 10,
  // characterCount = "10"

  // parseInt ---> converts a string data type into a number data type
  characterCount = parseInt(characterCount)

  /*
   var num1 = 5;
   var num2 = 10;
   var num3 = "20";

   console.log(num1 + num2) ---> 15
   console.log(num1 + num3) ----> 520

   console.log(num1 + parseInt(num3)) ---> 25
  */

   // characterCount should be within range 8-128
   // characterCount should be a number

   // || ---> OR, means atleast 1 of the statements should be true in order for the outcome to be true

   //while(true || true || false) ---> true
   // false || false || false ---> false

   // && ---> AND, means all should be true iun order for the outcome to be true
   // true && true && false ---> false
   // true && true && true --> true


  while (characterCount > 128 || characterCount <=8 || isNaN (characterCount)){

    alert('Please select a password between 8 and 128 characters.')

    characterCount=window.prompt("Please indicate how many characters you'd like your password to be.")

    characterCount = parseInt(characterCount)
  }


var yesToNum = window.confirm ('Would you like numbers in your password?');
var yesToSpecialCh= window.confirm ('Would you like special characters in your password?')
var yesToUpper = window.confirm('Would you want uppercase letters in your password?');
var yesToLower = window.confirm("Would you like lowercase letters in your password?")

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_concat_string//
if (yesToNum) {
  // concat -> joins two arrays into one
  // var array1 = [1, 2, 3]
  // var array2 = ['a', 'b', 'c']

  // var array3 = array1.concat(array2)
  // // array3 ----> [1,2,3,'a','b','c']

  charac = charac.concat(numerics)

  // charac ---> [] + ['0', '1', '2'....
  // charac ---> ['0', '1', '2' ...
};

if (yesToSpecialCh){
  charac = charac.concat (specialCharacters)
  // charac --->  ['0', '1', '2' ... + ['!','"','#',.
  // charac --> ['0', '1', '2',..., '!','"','#',...]

if (yesToUpper){
  charac=charac.concat(UpperABCs)
};
if (yesToLower){
  charac = charac.concat(LowerABCs)};
}

// after getting the final version of charac

// if characterCount for example is 10, this will run 10 times
for (var i=0; i < characterCount; i++){

  // var myNum = randomNum(1,charac.length);
  // randomNum(1, 52)

  // for example
  /*
  charac = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


  charac.length --> 52
  index range ---> 0 -> 51
  */

  var myNum = Math.floor(Math.random() * charac.length)
  // generate a random number between 0 - 0.99999
  // 0.513744343, 0.9999999, 0.000
  // 26.6, 51.9, 0
  // index can only be whole numbers
  // Math.floor(26.6) ---> 26
  // Math.floor(51.9) ----> 51


  password.push(charac[myNum])
  // charac[26] ---> 'Z'

  //first loop
  // i=0
  // 0 < 10 ---> true
  // password <-- push in charac[myNum]
};

// password --> ['A', 'z', 'H', 'y'....]
// password.join() --> converts array to string
// password ---> "AzHy...."
return (password.join(''));

}

//given code
// Get references to the #generate element
var createBtn = document.querySelector("#create");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
createBtn.addEventListener("click", writePassword);

