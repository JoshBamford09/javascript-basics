const {
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
} = require('../arrays');

describe('getNthElement', () => {
  const array = ['cat', 'dog', 'elephant', 'fox'];

  it('returns the element at the given position', () => {
    expect(getNthElement(0, array)).toEqual('cat');
    expect(getNthElement(2, array)).toEqual('elephant');
    expect(getNthElement(3, array)).toEqual('fox');
  });

  xit('if n is greater than the number of elements, it cycles back to the start', () => {
    expect(getNthElement(4, array)).toEqual('cat');
    expect(getNthElement(5, array)).toEqual('dog');
  });
});

describe('arrayToCSVString', () => {
  it('returns the array elements as a comma-seperated string', () => {
    expect(arrayToCSVString(['a', 'b', 'c', 'd'])).toEqual('a,b,c,d');
    expect(arrayToCSVString([1, 2, 3, 4, 5])).toEqual('1,2,3,4,5');
  });
});

describe('csvStringToArray', () => {
  it('converts the csv string as an array', () => {
    expect(csvStringToArray('a,b,c,d')).toEqual(['a', 'b', 'c', 'd']);
    expect(csvStringToArray('1,2,3,4,5')).toEqual(['1', '2', '3', '4', '5']);
  });
});

describe('addToArray', () => {
  it('adds the item to the end of the array', () => {
    const array = [];
    const array2 = [1, 2, 3];

    expect(addToArray('a', array)).toEqual(undefined);
    expect(addToArray(4, array2)).toEqual(undefined);

    expect(array).toEqual(['a']);
    expect(array2).toEqual([1, 2, 3, 4]);
  });
});

describe('addToArray2', () => {
  it('returns a new array with the value appended', () => {
    const array = ['a', 'b', 'c'];
    const array2 = [1, 2, 3];

    expect(addToArray2('d', array)).toEqual(['a', 'b', 'c', 'd']);
    expect(array).toEqual(['a', 'b', 'c']);

    expect(addToArray2(4, array2)).toEqual([1, 2, 3, 4]);
    expect(array2).toEqual([1, 2, 3]);
  });
});

describe('removeNthElement', () => {
  it('removes the element at position n', () => {
    const array = ['ant', 'bison', 'cockerel', 'duck', 'elephant'];
    removeNthElement(2, array);
    expect(array).toEqual(['ant', 'bison', 'duck', 'elephant']);
    
    const arrayTwo = ['thing 1', 'thing 2', 'thing 3', 'thing 4', 'thing 5'];
    removeNthElement(0, arrayTwo);
    expect(arrayTwo).toEqual(['thing 2', 'thing 3', 'thing 4', 'thing 5']);
  });
});

describe('numbersToStrings', () => {
  it('converts every number in the array to a string', () => {
    expect(numbersToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    expect(numbersToStrings([7, 8, 9])).toEqual(['7', '8', '9']);
  });
});

describe('uppercaseWordsInArray', () => {
  it('makes every string in the array uppercase', () => {
    expect(uppercaseWordsInArray(['cat', 'mouse', 'banana'])).toEqual([
      'CAT',
      'MOUSE',
      'BANANA'
    ]);
    expect(uppercaseWordsInArray(['romy', 'mo', 'baNana'])).toEqual([
      'ROMY',
      'MO',
      'BANANA'
    ]);
  });
});

describe('reverseWordsInArray', () => {
  xit('reverses every string in an array', () => {
    expect(reverseWordsInArray(['cat', 'Mouse', 'banana'])).toEqual([
      'tac',
      'esuoM',
      'ananab'
    ]);
    expect(reverseWordsInArray(['dog', 'cat', 'fig'])).toEqual([
      'god',
      'tac',
      'gif'
    ]);
  });
});

describe('onlyEven', () => {
  xit('filters the array and only returns even numbers', () => {
    expect(onlyEven([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
    expect(onlyEven([8, 9, 10, 11, 12, 13, 14, 15])).toEqual([8, 10, 12, 14]);
  });
});

describe('removeNthElement2', () => {
  xit('returns an array with the nth element removed, and does not mutate the original', () => {
    const array = ['bike', 'car', 'train', 'bus'];
    expect(removeNthElement2(2, array)).toEqual(['bike', 'car', 'bus']);
    expect(array).toEqual(['bike', 'car', 'train', 'bus']);
    const arrayTwo = ['cat', 'mouse', 'banana'];
    expect(removeNthElement2(0, arrayTwo)).toEqual(['mouse', 'banana']);
    expect(arrayTwo).toEqual(['cat', 'mouse', 'banana']);
  });
});

describe('elementsStartingWithAVowel', () => {
  xit('returns elements starting with a vowel', () => {
    expect(
      elementsStartingWithAVowel([
        'apple',
        'bapple',
        'capple',
        'dapple',
        'epple',
        'fepple',
        'gepple',
        'hepple',
        'ipple',
        'jipple',
        'kipple',
        'lipple',
        'mipple',
        'nipple',
        'opple',
        'popple',
        'qopple',
        'ropple',
        'sopple',
        'topple',
        'upple',
        'vupple',
        'wupple',
        'xupple',
        'yupple',
        'zupple'
      ])
    ).toEqual(['apple', 'epple', 'ipple', 'opple', 'upple']);
    expect(
      elementsStartingWithAVowel([
        'aaaa',
        'bbbb',
        'eeee',
      ])
    ).toEqual(['aaaa', 'eeee']);
  });

  xit('is case insensitive', () => {
    expect(
      elementsStartingWithAVowel([
        'Apple',
        'Bapple',
        'Capple',
        'Dapple',
        'Epple',
        'Fepple',
        'Gepple',
        'Hepple',
        'Ipple',
        'Jipple',
        'Kipple',
        'Lipple',
        'Mipple',
        'Nipple',
        'Opple',
        'Popple',
        'Qopple',
        'Ropple',
        'Sopple',
        'Topple',
        'Upple',
        'Vupple',
        'Wupple',
        'Xupple',
        'Yupple',
        'Zupple'
      ])
    ).toEqual(['Apple', 'Epple', 'Ipple', 'Opple', 'Upple']);
     expect(
      elementsStartingWithAVowel([
        'Aaaa',
        'Bbbb',
        'Eeee',
      ])
    ).toEqual(['Aaaa', 'Eeee']);
  });
});

describe('removeSpaces', () => {
  xit('returns the string with the space characters removed', () => {
    expect(removeSpaces('this string has spaces')).toEqual(
      'thisstringhasspaces'
    );
    expect(removeSpaces(' this one has sneaky   spaces ')).toEqual(
      'thisonehassneakyspaces'
    );
  });
});

describe('sumNumbers', () => {
  xit('returns the sum of the numbers in the array', () => {
    expect(sumNumbers([1, 3, 5, 6, 2, 8])).toEqual(25);
    expect(sumNumbers([1, 3, 5])).toEqual(9);
  });
});

describe('sortByLastLetter', () => {
  xit('sorts the string by the last character', () => {
    expect(
      sortByLastLetter(['Lannister', 'Stark', 'Greyjoy', 'Targaryen'])
    ).toEqual(['Stark', 'Targaryen', 'Lannister', 'Greyjoy']);
    expect(
      sortByLastLetter(['Mo', 'Romy', 'Miguel', 'Martyna'])
    ).toEqual(['Martyna', 'Miguel', 'Mo', 'Romy']);
  });
});
