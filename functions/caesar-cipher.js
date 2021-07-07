function caesarCipher(string, shiftNumber) {
  let lowerCaseLetter = /[a-z]/;
  let upperCaseLetter = /[A-Z]/;
  let returnString = '';
  let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < string.length; i++) {
    let newAlphabetIndex = undefined;
    if (lowerCaseLetter.test(string.charAt(i))) {
      newAlphabetIndex = _getNewIndex(
        lowerCaseAlphabet,
        string,
        i,
        shiftNumber
      );
      returnString += _getNextChar(lowerCaseAlphabet, newAlphabetIndex);
    } else if (upperCaseLetter.test(string.charAt(i))) {
      newAlphabetIndex = _getNewIndex(
        upperCaseAlphabet,
        string,
        i,
        shiftNumber
      );
      returnString += _getNextChar(upperCaseAlphabet, newAlphabetIndex);
    } else {
      // not a letter
      returnString += string.charAt(i);
    }
  }
  // console.log(returnString);
  return returnString;
}

function _getNewIndex(lowerOrUpperCase, string, i, shiftNumber) {
  let thisCharacter = string[i]; //=a
  let alphabetIndex = lowerOrUpperCase.indexOf(thisCharacter);
  return (alphabetIndex + shiftNumber) % 26;
}

function _getNextChar(lowerOrUpperCase, newAlphabetIndex) {
  return lowerOrUpperCase.charAt(newAlphabetIndex);
}

export { caesarCipher };
