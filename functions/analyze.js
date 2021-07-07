// Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
// const object = analyze([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

function analyze(arrayOfNumbers) {
  let returnObject = {};
  returnObject.min = _min(arrayOfNumbers);
  returnObject.max = _max(arrayOfNumbers);
  returnObject.length = _length(arrayOfNumbers);
  returnObject.average = _average(arrayOfNumbers);
  return returnObject;
}

function _min(arrayOfNumbers) {
  let lowestNumber = undefined;
  let allTimeLowestNumber = undefined;
  if (arrayOfNumbers.length === 1) return arrayOfNumbers[0];

  allTimeLowestNumber = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    if (arrayOfNumbers[i] < arrayOfNumbers[i + 1]) {
      lowestNumber = arrayOfNumbers[i];
    } else {
      lowestNumber = arrayOfNumbers[i + 1];
    }
    if (lowestNumber < allTimeLowestNumber) {
      allTimeLowestNumber = lowestNumber;
    }
  }
  return allTimeLowestNumber;
}

function _max(arrayOfNumbers) {
  let biggestNumber = undefined;
  let allTimeBiggestNumber = undefined;
  if (arrayOfNumbers.length === 1) return arrayOfNumbers[0];

  allTimeBiggestNumber = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    if (arrayOfNumbers[i] > arrayOfNumbers[i + 1]) {
      biggestNumber = arrayOfNumbers[i];
    } else {
      biggestNumber = arrayOfNumbers[i + 1];
    }
    if (biggestNumber > allTimeBiggestNumber) {
      allTimeBiggestNumber = biggestNumber;
    }
  }

  return allTimeBiggestNumber;
}

function _length(arrayOfNumbers) {
  return arrayOfNumbers.length;
}

function _average(arrayOfNumbers) {
  let average = 0;
  let allNumbersSummed = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  allNumbersSummed = arrayOfNumbers.reduce(reducer);

  average = allNumbersSummed / arrayOfNumbers.length;
  return average;
}

export { analyze };
