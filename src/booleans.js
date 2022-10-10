const negate = a => {
  return !a
};

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !(a || b);

const one = (a, b) => a !== b;

const truthiness = a =>{
  return !!a;
};

const isEqual = (a, b) =>{
  return a===b
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return a % 2 == 1;
};

function isEven(a) {
  return a % 2 == 0;
};

function isSquare(a) {
  return a >= 0 && Math.sqrt(a) % 1 === 0;
};

function startsWith(char, string) {
  return string.startsWith(char);
}

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  }
  return false;
};

function isLowerCase(string) {
  if (string == string.toLowerCase()) {
    return true

  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
