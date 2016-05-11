/**
 * FACTORIAL COMPUTATION
 *
 * Returns factorial of n. A factorial is the product of the integers
 * from 1 to n inclusive.
 *
 *   factorial(5); // 120
 */
function factorial(n) {
	if(n < 0)
		return undefined;
	if(n === 0)
		return 1;
	else
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
	if(str.length < 2)
		return true;
	else {
		if(str[0] === str[str.length - 1])
			return palindrome(str.slice(1, -1));
		else
			return false;
	}
}

/**
 * STRING REVERSE
 *
 * Returns the reverses a string, str.
 *
 *   stringReverse('testing'); // 'gnitset'
 */
function stringReverse(str) {
	if(str.length === 1)
		return str;
	else
		return stringReverse(str.slice(1)) + str[0];
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
	if(arr.length === 0) return [];
	return [fn(arr[0])].concat(map(arr.slice(1), fn));
}

/**
 * GREATEST COMMON DIVISOR
 *
 * Returns the greatest common divisor (gcd) of two positive numbers.
 */
function gcd(x, y) {
	if(x === 0 || y === 0)
		return "No match";

	if(x <= y) {
		if(y % x === 0)
			return x;
		else
			return gcd(x - 1, y);
	}

	else if(y <= x) {
		if(x % y === 0)
			return y;
		else
			return gcd(x, y - 1);
	}
}

/**
 * NUMBERS BETWEEN
 *
 * Returns an array of the numbers between x and y exclusive.
 *
 *   inBetween(4, 8); // [5, 6, 7]
 */
function inBetween(x, y) {
	if(y - x <= 1) return [];
	return [x + 1].concat(inBetween(x + 1, y));
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
	return arr.length === 0 ? 0 : arr[0] + arraySum(arr.slice(1));
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
}

/**
 * FIBONACCI SEQUENCE
 *
 * Returns the nth number of the fibonacci sequence.
 */
function fib(n) {
}

/**
 * EVENS CHECKER
 *
 * Returns if a number, n, is even.
 *
 * @returns {boolean}
 */
function even(n) {
}

/**
 * MERGE SORT
 *
 * Returns an array sorted using merge sort.
 */
function mergeSort(arr) {
}

/**
 * NUMBERS TO TEXT
 *
 * Returns a string with single digit numbers transformed to their
 * respective text forms.
 *
 *   numToText('I have 5 dollars); // 'I have five dollars'
 */
function numToText(s, idx) {
}

/**
 * MULTIPLICATION
 *
 * Returns the product of two numbers, x and y, using only
 * addition and subtraction math operators.
 */
function mul(x, y) {
}

/**
 * DIVISION
 *
 * Returns the quotient of two numbers, x and y, using only
 * addition and subtraction math operators.
 */
function divide(x, y) {
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
}

/**
 * ARRAY REVERSE
 *
 * Returns an array with the elements of array, arr, in reverse order.
 */
function reverseArr(arr) {
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
}

/**
 * FLATTEN AN ARRAY
 *
 * Return an array with the elements of arr flattened.
 *
 *   flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
 */
function flatten(arr) {
}

/**
 * LETTER TALLY
 *
 * Returns an object containing tallies of each letter in string, str.
 *
 *   letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
 */
function letterTally(str, obj) {
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
}

// http://kevvv.in/untitledrecursion-in-javascript/
// http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion
// https://github.com/JS-Challenges/recursion-prompts/blob/master/src/recursion.js



