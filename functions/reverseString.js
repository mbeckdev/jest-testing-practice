// reverseString(string) takes a string and returns it reversed.

function reverseString(string) {
  let stringArray = '';
  stringArray = string.split('');
  let reverseStringArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    reverseStringArray[stringArray.length - i] = stringArray[i];
  }
  let reverseString = '';
  reverseString = reverseStringArray.join('');
  return reverseString;
}
export { reverseString };
