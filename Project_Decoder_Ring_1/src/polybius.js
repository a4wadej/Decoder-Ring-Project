// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
 
//DATA
//-----
const alphabet = 
{
  1 : ['a', 'b', 'c', 'd', 'e'],
  2 : ['f', 'g', 'h', 'i/j', 'k'],
  3 : ['l', 'm', 'n', 'o', 'p'],
  4 : ['q', 'r', 's', 't', 'u'],
  5 : ['v', 'w', 'x', 'y', 'z']
}



// HELPER FUNCTIONS
//----------------

//String To Array: Converts input to array.
const stringToArray = (string) => {
  let lcString = string.toLowerCase()
  let stringArray = []
  for (let letter of lcString) {
    if (letter === 'i' || letter === 'j') {stringArray.push('i/j')
    } else stringArray.push(letter)
  }
  return stringArray
}

//Find Num Pair: searches through alphabet and finds given letter. Returns number pair. 
//If no matches, returns character given. 

const findNumPair = (letterInArray) => {

let numPair = 0

for (rows in alphabet) {
 let currentRow = alphabet[rows]
  if (currentRow.some((letter) => letter === letterInArray)) {
    let rowNum = rows
    let columnNum = currentRow.indexOf(letterInArray)+1
    numPair = parseInt(`${columnNum}${rowNum}`)
    return numPair
    }
  } if (!numPair) return letterInArray
}

//Num String to Array: Used to decrypt message
//had to be different from "string to array" because of the way the number pairs work.
const numStringToArray = (string) => {
 
  let stringArray = []
  let numberPair = ''
  for (let number of string) {
   
    //check if value is a number:  
     if (parseInt(number)) {
      
       numberPair += number
  
       if (numberPair.length > 1) { 
         stringArray.push(numberPair)
         numberPair = ''
         }
    
    } else {
      stringArray.push(number)
      numberPair = ''
      }
    
  }
  return stringArray
}

//Get New Letter: Used for decryption process
const getNewLetter = (numbersArray, alphabet) => {

let newArray = numbersArray.map((numPair) => {
  if (!parseInt(numPair)) return numPair 
  
  let colNum = numPair[0] -1
  let rowNum = numPair[1] 

  
  let row = alphabet[rowNum]
  return (row[colNum])
 
})

return newArray.join("")
}

//COMMANDS
//---------

function polybius(input, encode = true) {
//When encoding   
if (encode){
  let stringArray = stringToArray(input)
  let  numPairs = stringArray.map((letter) => findNumPair(letter))
  return numPairs.join("")
}
  
//When decoding 

//Check if the string of numbers is even
let tempString = input.split(' ').join('')
if (tempString.length % 2 === 1) return false

//create an array of number pairs
let numbersArray = numStringToArray(input)
//Create a new message based off the number pairs
let newMessage = getNewLetter(numbersArray, alphabet)
return newMessage

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
