// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z",
  ];

   //HELPER FUNCTIONS
    //----------------

  //Shift Absolute: Controls shift of letter value to new value and accounts for maximum of 26 letters. 
  const shiftAbsolute = (shift, letterIndex) => {
    let newIndex = (letterIndex + shift) % 26;
    if (newIndex < 0) return newIndex + 26;
    return newIndex;
    };

  //Input to Array: Converts the string that was given. Converted into an array.
  const inputToArray = (input) => {
    //Set up return value, inputArray
    let inputArray = [];
    //Convert to lowercase (desired result isn't capital)
    let lowerCaseString = input.toLowerCase();
    //For every letter in the string, push the letter to the inputArray
    for (let i = 0; i < lowerCaseString.length; i++) {
      inputArray.push(lowerCaseString[i])} 
      
    return inputArray
  }

  //LETTERS TO NUMS: Converts the letters of the array to numbers that correspond to the alphabet. 
  //It then uses Shift Absolute to convert the number based on the shift value.
  const lettersToNums = (inputArray, alphabet, shift) => {
    let indexArray = inputArray.map((letter) => {
      if (alphabet.indexOf(letter) === -1) return letter;
      let indexOfLetter = alphabet.indexOf(letter);
      return shiftAbsolute(shift, indexOfLetter);
    })
    return indexArray }
  
  //NUMS TO LETTERS: Converts the new numbers into letters, corresponding to the alphabet.
  const numsToLetters = (indexArray, alphabet) => {
    let resultArray = indexArray.map((letterIndex) => {
      if (!Number.isInteger(letterIndex)) return letterIndex;
      return (newLetter = alphabet[letterIndex]);
      })
      return resultArray
    }


  
  //Ceasar Operations: Too many instructions, moved to helper function! 
  const caesarOperations = (input, shift, alphabet) => {
          //place the input string into an array
          let inputArray = inputToArray(input)
          //find the letter in the alphabet array that matches each letter in inputArray, and return its translated index value
          let indexArray = lettersToNums(inputArray, alphabet, shift)
          //Loop through indexArray and find each letter in the alphabet array that matches the index
          let resultArray = numsToLetters(indexArray, alphabet)
          //Join the new letters into a string
          let result = resultArray.join("");
          //Return the new string
          return result;
  }
  
  //-----------------------
  //END OF HELPER FUNCTIONS 



  function caesar(input, shift, encode = true) {
    //Return false if "shift" is not desired value
    if (!shift || shift > 25 || shift < -25) return false;
    //If we are encoding a message...
    if (encode) {
      return caesarOperations(input, shift, alphabet);
    }
    //If we are decoding a message...
    let decodeshift = shift - (shift * 2)
    return caesarOperations(input, decodeshift, alphabet);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };