// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const standardAlphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z",
  ];

  //Helper Functions
  //----------------------------------------------------------------

  //Alphabet Repeats Characters: Checks if chars are repeated in the given alphabet. 
  const alphabetRepeatsChars = (alphabet) => {
    for (let i = 0; i < alphabet.length; i++) {
      let currentLetter = alphabet[i]
      for (let j = i+1; j < alphabet.length; j++) {
        if (currentLetter === alphabet[j]) return true

      }
    }
  }

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

  // Message to Nums: converts the input array of letters into an array of numbers 
  const messageToNums = (inputArray, alphabetChoice) => {
  let messageInNumbers = []

      inputArray.map((letter) => {
        let index =  alphabetChoice.indexOf(letter)
        
            if (index === -1) {messageInNumbers.push(letter)}
            else { 
                messageInNumbers.push(index)
                }
        })
        return messageInNumbers
    }

    const encodeMessage = (messageInNumbers, codeArray) => {
        let encodedMessageArray = []
        messageInNumbers.map((number) => {
            if (typeof number !== 'number') encodedMessageArray.push(number)
            encodedMessageArray.push(codeArray[number])
        })
        return encodedMessageArray
    }


function substitution(input, alphabet, encode = true) {
    // your solution code here

    if (!alphabet || alphabet.length !== 26 || alphabetRepeatsChars(alphabet)) return false
    
    let inputArray = inputToArray(input)
    let codeArray = inputToArray(alphabet)

    //When encoding...
    if (encode){

      let messageInNumbers = messageToNums(inputArray, standardAlphabet)
      let encodedMessageArray = encodeMessage(messageInNumbers, codeArray)

      return encodedMessageArray.join('')
    
    //When decoding...
    } else {
        let messageInNumbers = messageToNums(inputArray, alphabet)
        let decodedMessageArray = encodeMessage(messageInNumbers, standardAlphabet)
        return decodedMessageArray.join('')
    }

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
