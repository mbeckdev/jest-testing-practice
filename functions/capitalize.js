// capitalize(string) takes a string and returns that string with the first character capitalized

function capitalize(string) {
  let returnString = string;
  let stringArray = [];
  stringArray = returnString.split('');
  stringArray[0] = stringArray[0].toUpperCase();
  returnString = stringArray.join('');
  return returnString;
}

export { capitalize };

//**************** */
// works
// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
