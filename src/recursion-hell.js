/**
 * FACTORIAL COMPUTATION
 *
 * Returns factorial of n. A factorial is the product of the integers
 * from 1 to n inclusive.
 *
 *   factorial(5); // 120
 */
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  if (n < 3) return n;
  return n * factorial(n - 1);
}

/**
 * PALINDROME DETECTOR
 *
 * Returns if string, str, is a palindrome (a word that is identical
 * in reverse order). Assume single letters are considered palindromes.
 *
 * @returns {boolean}
 */
function palindrome(str) {
  if (str.length < 2) return true;
  return str[0] === str[str.length - 1] && palindrome(str.substring(1, -1));
}

/**
 * STRING REVERSE
 *
 * Returns the reverses a string, str.
 *
 *   stringReverse('testing'); // 'gnitset'
 */
function stringReverse(str) {
  if (str.length === 0) return '';
  return stringReverse(str.substring(1)) + str[0];
}

/**
 * MAP
 *
 * Returns an array of the results of calling a function, fn,
 * on each element of array, arr.
 *
 *   map(['a', 'b', 'c'], function(value) {
 *     return value.toUpperCase();
 *   });
 *   // ['A', 'B', 'C']
 */
function map(arr, fn) {
  if (arr.length === 0) return [];
  return [fn(arr[0])].concat(map(arr.slice(1), fn));
}

/**
 * GREATEST COMMON DIVISOR
 *
 * Returns the greatest common divisor (gcd) of two positive numbers.
 */
function gcd(x, y) {
  return !y ? x : gcd(y, x % y);
}

/**
 * NUMBERS BETWEEN
 *
 * Returns an array of the numbers between x and y exclusive.
 *
 *   inBetween(4, 8); // [5, 6, 7]
 */
function inBetween(x, y) {
  return x + 1 < y ? [x + 1].concat(inBetween(x + 1, y)) : [];
}

/**
 * ARRAY SUM
 *
 * Returns the the sum of all of the numbers in an array.
 * Assume there is no array depth.
 *
 *   arraySum([5, 2, 6]); // 13
 */
function arraySum(arr) {
  return arr.length ? arr[0] + arraySum(arr.slice(1)) : 0;
}

/**
 * EXPONENT CALCULATOR
 *
 * Returns the value of a number, base, raised to the exponent,
 * pow.
 *
 *   exp(8, 2); // 64
 */
function exp(base, pow) {
  return pow === 0 ? 1 : base * exp(base, pow - 1);
}

/**
 * FIBONACCI SEQUENCE
 *
 * Returns the nth number of the fibonacci sequence.
 */
function fib(n) {
  if (n < 0) return undefined;
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

/**
 * EVENS CHECKER
 *
 * Returns if a number, n, is even.
 *
 * @returns {boolean}
 */
function even(n) {
  if (n < 2 && n > -2) return n === 0;
  return n > 0 ? even(n - 2) : even(n + 2);
}

function _merge(arr1, arr2) {
  var i = 0;
  var j = 0;
  var result = [];
  while (i < arr1.length && j < arr2.length) {
    arr1[i] < arr2[j] ? result.push(arr1[i++]) : result.push(arr2[j++]);
  }
  while (i < arr1.length) {
    result.push(arr1[i++]);
  }
  while (j < arr2.length) {
    result.push(arr2[j++]);
  }
  return result;
}

/**
 * MERGE SORT
 *
 * Returns an array sorted using merge sort.
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]];
  }
  var mid = Math.floor(arr.length / 2);
  return _merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

var _numToTextMap = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
};

/**
 * NUMBERS TO TEXT
 *
 * Returns a string with single digit numbers transformed to their
 * respective text forms.
 *
 *   numToText('I have 5 dollars); // 'I have five dollars'
 */
function numToText(s, idx) {
  idx = idx || 0;
  if (idx >= s.length) return '';
  if (/[0-9]/.test(s[idx]) &&
      ((!s[idx - 1] || s[idx - 1] === ' ') &&
      (!s[idx + 1] || s[idx + 1] === ' '))) {
    return _numToTextMap[+s[idx]] + numToText(s, idx + 1);
  }
  return s[idx] + numToText(s, idx + 1);
}

/**
 * MULTIPLICATION
 *
 * Returns the product of two numbers, x and y, using only
 * addition and subtraction math operators.
 */
function mul(x, y) {
  if (y < 0) return mul(-x, -y);
  if (x === 0 || y === 0) return 0;
  return y === 1 ? x : x + mul(x, y - 1);
}

/**
 * DIVISION
 *
 * Returns the quotient of two numbers, x and y, using only
 * addition and subtraction math operators.
 */
function divide(x, y) {
  if (y === 0) return undefined;
  if (x < 0) {
    return divide(-x, -y);
  }
  if (y < 0) {
    if (x + y < 0) return 0;
    if (x + y === 0) return -1;
    return -1 + divide(x + y, y);
  } else {
    if (x - y < 0) return 0;
    if (x - y === 0) return 1;
    return 1 + divide(x - y, y);
  }
}

/**
 * POWER OF TWO
 *
 * Returns if a number is a power of two.
 *
 *   powerOfTwo(1); // true
 *   powerOfTwo(16); // true
 *   powerOfTwo(10); // false
 */
function powerOfTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  return powerOfTwo(n / 2);
}

/**
 * MODULO
 *
 * Returns the remainder of dividing two numbers, x and y, without
 * using only addition and subtraction math operators.
 *
 *   modulo(5,2); // 1
 *   modulo(17,5); // 2
 *   modulo(22,6); // 4
 */
function modulo(x, y) {
  if (y === 0) return undefined;
  if (x < 0) {
    if (y < 0) {
      if (x - y > 0) return x;
      return modulo(x - y, y);
    } else {
      if (x + y > 0) return x;
      return modulo(x + y, y);
    }
  } else {
    if (y < 0) {
      if (x + y < 0) return x;
      return modulo(x + y, y);
    } else {
      if (x - y < 0) return x;
      return modulo(x - y, y)
    }
  }
}

/**
 * STRING COMPARISON
 *
 * Returns if two strings, str1 and str2, are identical.
 *
 *   compareStr('house', 'houses'); // false
 *   compareStr('', ''); // true
 *   compareStr('tomato', 'tomato'); // true
 */
function compareStr(str1, str2) {
  var idx = arguments[2] || 0;
  if (idx >= str1.length && idx > str2.length) return true;
  return str1[idx] === str2[idx] && compareStr(str1, str2, idx + 1);
}

/**
 * ARRAY REVERSE
 *
 * Returns an array with the elements of array, arr, in reverse order.
 */
function reverseArr(arr) {
  return arr.length === 0 ? [] : reverseArr(arr.slice(1)).concat([arr[0]]);
}

/**
 * ARRAY CREATOR
 *
 * Returns a new array with filled with a value of given length.
 *
 *   buildList(0, 5); // [0, 0, 0, 0, 0]
 *   buildList(7, 3); // [7, 7, 7]
 */
function buildList(val, len) {
  return len <= 0 ? [] : [val].concat(buildList(val, len - 1));
}

/**
 * OCCURRENCE COUNT
 *
 * Returns the number of occurrences of a value in an array.
 *
 *   countOccurrence([2,7,4,4,1,4], 4); // 3
 *   countOccurrence([2,'banana',4,4,1,'banana'], 'banana'); // 2
 */
function countOccurrence(arr, val) {
  if (arr.length <= 0) return 0;
  return +(arr[0] === val) + countOccurrence(arr.slice(1), val);
}

function _isObject(obj) {
  return obj === Object(obj);
}

/**
 * KEY IN OBJECT OCCURRENCE COUNTER
 *
 * Returns the number of times a key occurs in an object.
 *
 *   var obj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
 *   countKeysInObj(obj, 'r'); // 1
 *   countKeysInObj(obj, 'e'); // 2
 */
function countKeysInObj(obj, key) {
  if (!_isObject(obj)) return 0;
  return Object.keys(obj).reduce(function(count, k) {
    console.log(obj, k);
    return count + +(k === key) + countKeysInObj(obj[k], key);
  }, 0);
}

/**
 * VALUE IN OBJECT OCCURRENCE COUNTER
 *
 * Returns the number of times a value occurs in an object.
 *
 *   var obj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
 *   countValuesInObj(obj, 'r') // 2
 *   countValuesInObj(obj, 'e') // 1
 */
function countValuesInObj(obj, val) {
  if (!_isObject(obj)) {
    return +(obj === val);
  }
  return Object.keys(obj).reduce(function(count, k) {
    return count + countValuesInObj(obj[k], val);
  }, 0);
}

/**
 * KEY IN OBJECT RENAMER
 *
 * Replace the properties of an object (and nested objects) with
 * from key to newKey, while preserving the original property value.
 *
 * @returns {Object} object with renamed keys
 */
function replaceKeysInObj(obj, key, newKey) {
  if (_isObject(obj)) {
    if (obj.hasOwnProperty(key)) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
    Object.keys(obj).forEach(function(k) {
      replaceKeysInObj(obj[k], key, newKey);
    });
  }
  return obj;
}

/**
 * ARRAY CAPITALIZER
 *
 * Returns a new array containing each word capitalized.
 *
 *   var words = ['i', 'am', 'learning', 'recursion'];
 *   capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 */
function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

/**
 * ARRAY CAPITALIZER PT. II
 *
 * Returns a new array containing each word with the first letter
 * capitalized.
 *
 *   var words = ['car', 'poop', 'banana'];
 *   capitalizeWords(words); // ['Car', 'Poop', 'Banana']
 */
function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  return [arr[0][0].toUpperCase() + arr[0].substr(1)]
    .concat(capitalizeFirst(arr.slice(1)));
}

/**
 * SUM EVEN IN NESTED OBJECT
 *
 * Return the sum of all even values in an object (including
 * nested objects' values).
 *
 *   var obj = {
 *     a: 2,
 *     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
 *     c: {c: {c: 2}, cc: 'ball', ccc: 5},
 *     d: 1,
 *     e: {e: {e: 2}, ee: 'car'}
 *   };
 *   nestedEvenSum(obj); // 10
 */
function nestedEvenSum(obj) {
  if (!_isObject(obj)) {
    return obj % 2 === 0 ? obj : 0;
  }
  return Object.keys(obj).reduce(function(count, k) {
    return count + nestedEvenSum(obj[k]);
  }, 0);
}

/**
 * FLATTEN AN ARRAY
 *
 * Return an array with the elements of arr flattened.
 *
 *   flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
 */
function flatten(arr) {
  if (arr.length === 0) return [];
  var cur = Array.isArray(arr[0]) ? flatten(arr[0]) : [arr[0]];
  return cur.concat(flatten(arr.slice(1)));
}

/**
 * LETTER TALLY
 *
 * Returns an object containing tallies of each letter in string, str.
 *
 *   letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
 */
function letterTally(str, obj) {
  obj = obj || {};
  if (!str.length) return obj;
  obj[str[0]] = (obj[str[0]] || 0) + 1;
  return letterTally(str.substr(1), obj);
}

/**
 * ELIMINATE CONSECUTIVE DUPLICATES
 *
 * Returns an array with duplicate consecutive elements replaced with a
 * single occurrence of the repeated element. The order of the elements
 * should not be changed.
 *
 *   compress([1, 2, 2, 3, 4, 4, 5, 5, 5]); // [1, 2, 3, 4, 5]
 *   compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]); // [1, 2, 3, 4, 2, 5, 4]
 */
function compress(arr) {
  if (!arr.length) return [];
  var prev = arguments[1];
  return (prev === arr[0] ? [] : [arr[0]])
    .concat(compress(arr.slice(1), arr[0]));
}

/**
 * REDUCE ZERO SERIES
 *
 * Returns an array with series of zeroes reduced to a single 0.
 *
 *   minimizeZeroes([2, 0, 0, 0, 1, 4]); // [2, 0, 1, 4]
 *   minimizeZeroes([2, 0, 0, 0, 1, 0, 0, 4]); // [2, 0, 1, 0, 4]
 */
function minimizeZeroes(arr) {
  if (!arr.length) return [];
  var prev = arguments[1];
  return (prev === 0 && prev === arr[0] ? [] : [arr[0]])
    .concat(compress(arr.slice(1), arr[0]));
}

function _makeNegative(n) {
  return n < 0 ? n : -n;
}

function _makePositive(n) {
  return n < 0 ? -n : n;
}

/**
 * SIGN ALTERNATION
 *
 * Returns an array with the numbers in an array alternating between
 * positive and negative regardless of their original sign. The first
 * number in the index always needs to be positive.
 *
 *   alternateSign([2, 7, 8, 3, 1, 4]); // [2, -7, 8, -3, 1, -4]
 *   alternateSign([-2, -7, 8, 3, -1, 4]); // [2, -7, 8, -3, 1, -4]
 */
function alternateSign(arr) {
  if (!arr.length) return [];
  var prev = arguments[1] || -1;
  return (prev > 0 ? [_makeNegative(arr[0])] : [_makePositive(arr[0])])
    .concat(alternateSign(arr.slice(1), -prev));
}

// http://kevvv.in/untitledrecursion-in-javascript/
// http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion
// https://github.com/JS-Challenges/recursion-prompts/blob/master/src/recursion.js



