describe("Recursion Hell", function() {
  describe("factorial", function() {
    it("should be undefined when n less than 0", function() {
      expect(factorial(-10)).toBeUndefined();
      expect(factorial(-1)).toBeUndefined();
    });

    it("should be 1 when n is 0", function() {
      expect(factorial(0)).toBe(1);
    });

    it("should be factorial of n", function() {
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });
  });

  describe("palindrome", function() {
    it("should be true for strings shorter than 2 characters", function() {
      expect(palindrome('')).toBeTruthy();
      expect(palindrome('a')).toBeTruthy();
    });

    it("should be true for palindromic strings", function() {
      expect(palindrome('aa')).toBeTruthy();
      expect(palindrome('aba')).toBeTruthy();
      expect(palindrome('abba')).toBeTruthy();
    });

    it("should be false for non palindromic strings", function() {
      expect(palindrome('ab')).toBeFalsy();
      expect(palindrome('aab')).toBeFalsy();
      expect(palindrome('abb')).toBeFalsy();
      expect(palindrome('abc')).toBeFalsy();
    });
  });

  describe("stringReverse", function() {
    it("should be the string reversed", function() {
      expect(stringReverse('testing')).toBe('gnitset');
    });
  });

  describe("map", function() {
    it("should be results of calling function on each array item", function() {
      var makeUpperCase = function(v) {
        return v.toUpperCase();
      };
      expect(map(['a', 'b', 'c'], makeUpperCase)).toEqual(['A', 'B', 'C']);

      var add1 = function(v) {
        return v + 1;
      };
      expect(map([1, 2, 3], add1)).toEqual([2, 3, 4]);
    });
  });

  describe("gcd", function() {
    it("should be the greatest common divisor of x and y", function() {
      expect(gcd(2, 3)).toBe(1);
      expect(gcd(2, 2)).toBe(2);
      expect(gcd(10, 15)).toBe(5);
    });
  });

  describe("inBetween", function() {
    it("should be an array of numbers in between x and y", function() {
      expect(inBetween(1, 5)).toEqual([2, 3, 4]);
      expect(inBetween(-1, 3)).toEqual([0, 1, 2]);
      expect(inBetween(-2, 2)).toEqual([-1, 0, 1]);
    });

    it("should be an empty array if x is not 2 less than y", function() {
      expect(inBetween(0, 1)).toEqual([]);
      expect(inBetween(1, 1)).toEqual([]);
      expect(inBetween(1, -1)).toEqual([]);
      expect(inBetween(-1, -3)).toEqual([]);
    });
  });

  describe("arraySum", function() {
    it("should be the sum of the items in the array", function() {
      expect(arraySum([])).toBe(0);
      expect(arraySum([1, 2, 3])).toBe(6);
    });
  });

  describe("exp", function() {
    describe("for negative base", function() {
      it("should be the 1 if the power is 0", function() {
        expect(exp(-1, 0)).toBe(1);
        expect(exp(-2, 0)).toBe(1);
      });

      it("should be positive if pow is even", function() {
        expect(exp(-1, 2)).toBeGreaterThan(0);
        expect(exp(-2, 2)).toBeGreaterThan(0);
        expect(exp(-2, 4)).toBeGreaterThan(0);
      });

      it("should be negative if pow is odd", function() {
        expect(exp(-1, 1)).toBeLessThan(0);
        expect(exp(-2, 1)).toBeLessThan(0);
        expect(exp(-2, 3)).toBeLessThan(0);
      });

      it("should be base^pow", function() {
        expect(exp(-1, 2)).toBe(Math.pow(-1, 2));
        expect(exp(-1, 3)).toBe(Math.pow(-1, 3));
        expect(exp(-2, 2)).toBe(Math.pow(-2, 2));
        expect(exp(-2, 3)).toBe(Math.pow(-2, 3));
      });
    });

    describe("for base equal 0", function() {
      it("should be the 1 if the power is 0", function() {
        expect(exp(0, 0)).toBe(1);
      });

      it("should be 0 for positive pow", function() {
        expect(exp(0, 1)).toBe(0);
        expect(exp(0, 2)).toBe(0);
        expect(exp(0, 3)).toBe(0);
      });
    });

    describe("for positive base", function() {
      it("should be the 1 if the power is 0", function() {
        expect(exp(1, 0)).toBe(1);
        expect(exp(2, 0)).toBe(1);
      });

      it("should be positive", function() {
        expect(exp(1, 1)).toBeGreaterThan(0);
        expect(exp(1, 2)).toBeGreaterThan(0);
        expect(exp(1, 3)).toBeGreaterThan(0);
        expect(exp(2, 1)).toBeGreaterThan(0);
        expect(exp(2, 2)).toBeGreaterThan(0);
        expect(exp(2, 3)).toBeGreaterThan(0);
      });

      it("should be base^pow", function() {
        expect(exp(1, 1)).toBe(Math.pow(1, 1));
        expect(exp(1, 2)).toBe(Math.pow(1, 2));
        expect(exp(1, 3)).toBe(Math.pow(1, 3));
        expect(exp(2, 1)).toBe(Math.pow(2, 1));
        expect(exp(2, 2)).toBe(Math.pow(2, 2));
        expect(exp(2, 3)).toBe(Math.pow(2, 3));
      });
    });
  });

  describe("fib", function() {
    it("should be the nth number of the fibonacci sequence", function() {
      expect(fib(0)).toBe(0);
      expect(fib(1)).toBe(1);
      expect(fib(2)).toBe(1);
      expect(fib(3)).toBe(2);
      expect(fib(4)).toBe(3);
      expect(fib(5)).toBe(5);
      expect(fib(6)).toBe(8);
      expect(fib(7)).toBe(13);
    });

    it("should be undefined for negative n", function() {
      expect(fib(-1)).toBeUndefined();
      expect(fib(-2)).toBeUndefined();
    });
  });

  describe("even", function() {
    it("should be true if n is divisible by 2", function() {
      expect(even(-4)).toBeTruthy();
      expect(even(-2)).toBeTruthy();
      expect(even(0)).toBeTruthy();
      expect(even(2)).toBeTruthy();
      expect(even(4)).toBeTruthy();
    });

    it("should be false if n is not divisible by 2", function() {
      expect(even(-3)).toBeFalsy();
      expect(even(-1)).toBeFalsy();
      expect(even(1)).toBeFalsy();
      expect(even(3)).toBeFalsy();
    });
  });

  describe("mergeSort", function() {
    it("should be arr sorted", function() {
      expect(mergeSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
      expect(mergeSort([7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });

  describe("numToText", function() {
    it("should not replace double digit numbers", function() {
      expect(numToText("I have 15 dollars")).toBe("I have 15 dollars");
    });

    it("should replace single digit numbers at end of s", function() {
      expect(numToText("I have 5")).toBe("I have five");
    });

    it("should replace single digit numbers at start of s", function() {
      expect(numToText("5 total")).toBe("five total");
    });

    it("should replace single digit numbers in the middle of s", function() {
      expect(numToText("I have 5 dollars")).toBe("I have five dollars");
    });
  });

  describe("mul", function() {
    it("should be the product of x and y", function() {
      expect(mul(0, 0)).toBe(0 * 0);
      expect(mul(1, 0)).toBe(1 * 0);
      expect(mul(0, 1)).toBe(0 * 1);
      expect(mul(1, 1)).toBe(1 * 1);
      expect(mul(-1, 1)).toBe(-1 * 1);
      expect(mul(1, -1)).toBe(1 * -1);
      expect(mul(2, 3)).toBe(2 * 3);
      expect(mul(3, 2)).toBe(3 * 2);
    });
  });

  describe("divide", function() {
    it("should be undefined if y is 0", function() {
      expect(divide(-1, 0)).toBeUndefined();
      expect(divide(0, 0)).toBeUndefined();
      expect(divide(1, 0)).toBeUndefined();
    });

    it("should be x divided by y", function() {
      expect(divide(-1, 1)).toBe(-1 / 1);
      expect(divide(-2, 1)).toBe(-2 / 1);
      expect(divide(-3, 1)).toBe(-3 / 1);

      expect(divide(-1, -1)).toBe(-1 / -1);
      expect(divide(-2, -1)).toBe(-2 / -1);
      expect(divide(-3, -1)).toBe(-3 / -1);

      expect(divide(1, -1)).toBe(1 / -1);
      expect(divide(2, -1)).toBe(2 / -1);
      expect(divide(3, -1)).toBe(3 / -1);

      expect(divide(6, 2)).toBe(6 / 2);
      expect(divide(6, 3)).toBe(6 / 3);
    });

    it("should be the result of integer division", function() {
      expect(divide(1, 2)).toBe(Math.floor(1 / 2));
      expect(divide(3, 2)).toBe(Math.floor(3 / 2));
      expect(divide(5, 2)).toBe(Math.floor(5 / 2));
    });
  });

  describe("powerOfTwo", function() {
    it("should be true for n that are a power of 2", function() {
      expect(powerOfTwo(1)).toBeTruthy();
      expect(powerOfTwo(2)).toBeTruthy();
      expect(powerOfTwo(4)).toBeTruthy();
      expect(powerOfTwo(16)).toBeTruthy();
      expect(powerOfTwo(32)).toBeTruthy();
    });

    it("should be false for n that are not a power of 2", function() {
      expect(powerOfTwo(0)).toBeFalsy();
      expect(powerOfTwo(3)).toBeFalsy();
      expect(powerOfTwo(6)).toBeFalsy();
      expect(powerOfTwo(10)).toBeFalsy();
    });
  });

  describe("modulo", function() {
    it("should be undefined if y is 0", function() {
      expect(modulo(-1, 0)).toBeUndefined();
      expect(modulo(0, 0)).toBeUndefined();
      expect(modulo(1, 0)).toBeUndefined();
    });

    it("should be remainder of x divided by y", function() {
      expect(modulo(5, 2)).toBe(5 % 2);
      expect(modulo(17, 5)).toBe(17 % 5);
      expect(modulo(22, 6)).toBe(22 % 6);

      expect(modulo(-5, 2)).toBe(-5 % 2);
      expect(modulo(-17, 5)).toBe(-17 % 5);
      expect(modulo(22, -6)).toBe(22 % -6);
    });
  });

  describe("compareStr", function() {
    it("should be true for empty strings", function() {
      expect(compareStr('', '')).toBeTruthy();
    });

    it("should be true for identical strings", function() {
      expect(compareStr('tomato', 'tomato')).toBeTruthy();
    });

    it("should be false for strings that are different", function() {
      expect(compareStr('house', 'houses')).toBeFalsy();
    });
  });

  describe("reverseArr", function() {
    it("should be an empty array if arr is empty", function() {
      expect(reverseArr([])).toEqual([]);
    });

    it("should be an array with elements of arr in reverse order", function() {
      expect(reverseArr([1])).toEqual([1]);
      expect(reverseArr([1, 2])).toEqual([2, 1]);
      expect(reverseArr([1, 2, 3])).toEqual([3, 2, 1]);
    });
  });

  describe("buildList", function() {
    it("should be an array filled with value of provided length", function() {
      expect(buildList(0, 5)).toEqual([0, 0, 0, 0, 0]);
      expect(buildList(7, 3)).toEqual([7, 7, 7]);
    });
  });

  describe("countOccurrence", function() {
    it("should be the number of times val appears in arr", function() {
      expect(countOccurrence([2, 7, 4, 4, 1, 4], 4)).toBe(3);
      expect(countOccurrence([2, 'banana', 4, 4, 1, 'banana'], 'banana')).toBe(
        2);
    });
  });

  describe("countKeysInObj", function() {
    var obj = {
      'e': {'x': 'y'},
      't': {'r': {'e': 'r'}, 'p': {'y': 'r'}},
      'y': 'e'
    };

    it("should be the number of times key appears in obj", function() {
      expect(countKeysInObj(obj, 'r')).toBe(1);
      expect(countKeysInObj(obj, 'e')).toBe(2);
    });
  });

  describe("countValuesInObj", function() {
    var obj = {
      'e': {'x': 'y'},
      't': {'r': {'e': 'r'}, 'p': {'y': 'r'}},
      'y': 'e'
    };

    it("should be the number of times value appears in obj", function() {
      expect(countValuesInObj(obj, 'r')).toBe(2);
      expect(countValuesInObj(obj, 'e')).toBe(1);
    });
  });

  describe("replaceKeysInObj", function() {
    var obj = {
      'e': {'x': 'y'},
      't': {'r': {'e': 'r'}, 'p': {'y': 'r'}},
      'y': 'e'
    };
    var expected = {
      's': {'x': 'y'},
      't': {'r': {'s': 'r'}, 'p': {'y': 'r'}},
      'y': 'e'
    };

    it("should be object with renamed keys", function() {
      expect(replaceKeysInObj(obj, 'e', 's')).toEqual(expected);
    });
  });

  describe("capitalizeWords", function() {
    var words = ['i', 'am', 'learning', 'recursion'];
    var expected = ['I', 'AM', 'LEARNING', 'RECURSION'];

    it("should be an array with the elements of arr capitalized", function() {
      expect(capitalizeWords(words)).toEqual(expected);
    });
  });

  describe("capitalizeFirst", function() {
    var words = ['car', 'poop', 'banana'];
    var expected = ['Car', 'Poop', 'Banana'];

    it("should be an array with the elements of arr capitalized", function() {
      expect(capitalizeFirst(words)).toEqual(expected);
    });
  });

  describe("nestedEvenSum", function() {
    var obj = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 2}, ee: 'car'}
    };

    it("should be the sum of all even values in obj", function() {
      expect(nestedEvenSum(obj)).toBe(10);
    });
  });

  describe("flatten", function() {
    it("should be an array with the elements of arr flattened", function() {
      expect(flatten([1, [2], [3, [[4]]], 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("letterTally", function() {
    it("should be an obj with the tallies of each letter", function() {
      expect(letterTally('potato')).toEqual({'p': 1, 'o': 2, 't': 2, 'a': 1});
    });
  });

  describe("compress", function() {
    it("should be an array with repeated elements compressed", function() {
      expect(compress([1, 2, 2, 3, 4, 4, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]))
        .toEqual([1, 2, 3, 4, 2, 5, 4]);
      expect(compress([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
    });
  });

  describe("minimizeZeroes", function() {
    it("should be an array with series of 0 reduced to a single 0", function() {
      expect(minimizeZeroes([2, 0, 0, 0, 1, 4])).toEqual([2, 0, 1, 4]);
      expect(minimizeZeroes([2, 0, 0, 0, 1, 0, 0, 4])).toEqual([2, 0, 1, 0, 4]);
    });
  });

  describe("alternateSign", function() {
    it("should be an array with alternating signs", function() {
      expect(alternateSign([2, 7, 8, 3, 1, 4])).toEqual([2, -7, 8, -3, 1, -4]);
      expect(alternateSign([-2, -7, 8, 3, -1, 4]))
        .toEqual([2, -7, 8, -3, 1, -4]);
    });
  });
});
