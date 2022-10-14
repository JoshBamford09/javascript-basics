// eslint-disable-next-line no-lone-blocks
const getNthElement = (index, array) => array[index];

const arrayToCSVString = array =>{
  return array.toString();
};

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map((num) => {
  return num.toString();
  });
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => {
    return string.toUpperCase();
  });
};

function reverseWordsInArray(strings) {
  const splitString = strings.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  return joinArray;
}

function removeNthElement2(index, array) {
  // your code here
}

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

const onlyEven = strings => {};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};