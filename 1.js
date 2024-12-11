// "this" is a problem
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}

//-----------------------------------------------------------------------------------------------------------//
// Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
  let moneyForYear = principal;
  let years = 0;
  for (let i = 0; moneyForYear < desired; i++) {
    let yearlyInterest = moneyForYear * interest;
    moneyForYear += yearlyInterest - yearlyInterest * tax;
    years++;
  }

  return years;
}

//-----------------------------------------------------------------------------------------------------------//
// Sum of odd numbers
function rowSumOddNumbers(n) {
  let currentOdd = 1;
  let sum = 0;

  for (let row = 1; row <= n; row++) {
    sum = 0;

    for (let i = 0; i < row; i++) {
      if (row === n) {
        sum += currentOdd;
      }
      currentOdd += 2;
    }
  }
  return sum;
}

//-----------------------------------------------------------------------------------------------------------//
// Find the middle element

function gimme(triplet) {
  const min = Math.min(...triplet);
  const max = Math.max(...triplet);
  return triplet.findIndex((el) => el !== min && el !== max);
}

//-----------------------------------------------------------------------------------------------------------//
// Breaking chocolate problem
function breakChocolate(n, m) {
  if (n <= 0 || m <= 0) {
    return 0;
  } else {
    return n * m - 1;
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Make a function that does arithmetic!
function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Remove anchor from URL

function removeUrlAnchor(url) {
  let del = "#";
  return url.split(del)[0];
}

//-----------------------------------------------------------------------------------------------------------//
// Round up to the next multiple of 5

function roundToNext5(n) {
  let result = n;
  for (let i = n; result % 5 !== 0; i++) {
    result++;
  }
  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Simple Fun #176: Reverse Letter

function reverseLetter(str) {
  let filteredStr = str.replace(/[^a-zA-Z]/g, "");
  return filteredStr.split("").reverse().join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Find the capitals

var capitals = function (word) {
  let resultArr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      resultArr.push(i);
    }
  }
  return resultArr;
};

//-----------------------------------------------------------------------------------------------------------//
// Two fighters, one winner

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = attacker === fighter1 ? fighter2 : fighter1;

  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;

    if (defender.health <= 0) {
      return attacker.name;
    }

    [attacker, defender] = [defender, attacker];
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Small enough? - Beginner

function smallEnough(a, limit) {
  maxNumber = Math.max(...a);
  return maxNumber > limit ? false : true;
}

//-----------------------------------------------------------------------------------------------------------//
// Anagram Detection

var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  return test.split("").sort().join("") === original.split("").sort().join("");
};

//-----------------------------------------------------------------------------------------------------------//
// Form The Minimum

function minValue(values) {
  let uniqueNumber = new Set(values);
  return Number([...uniqueNumber].sort().join(""));
}

//-----------------------------------------------------------------------------------------------------------//
// Maximum Multiple

function maxMultiple(divisor, bound) {
  let minMultipleInRange = 0;

  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) {
      minMultipleInRange = i;
    }
  }

  return minMultipleInRange;
}

//-----------------------------------------------------------------------------------------------------------//
// Sort Numbers

function solution(nums) {
  if (nums === null || nums.length <= 0) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Check the exam

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      score += 0;
    } else if (array1[i] === array2[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  }

  return Math.max(score, 0);
}

//-----------------------------------------------------------------------------------------------------------//
// Summing a number's digits

function sumDigits(number) {
  return Array.from(String(number).replace("-", ""))
    .map(Number)
    .reduce((a, b) => a + b);
}

//-----------------------------------------------------------------------------------------------------------//
// Fix string case

function solve(s) {
  let lower = 0;
  let upper = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      lower += 1;
    } else {
      upper += 1;
    }
  }

  if (lower === upper) {
    return s.toLowerCase();
  } else {
    return lower > upper ? s.toLowerCase() : s.toUpperCase();
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Factorial

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError();
  } else if (n === 0) {
    return 1;
  } else {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
      answer *= i;
    }
    return answer;
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Flatten and sort an array

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

//-----------------------------------------------------------------------------------------------------------//
// Sum of Minimums!

function sumOfMinimums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(...arr[i]);
  }

  return sum;
}

//-----------------------------------------------------------------------------------------------------------//
// Alternate capitalization

function capitalize(s) {
  let answer = [];

  for (let i = 0; i < 2; i++) {
    answer.push(
      s
        .split("")
        .map((el, index) => {
          return i % 2 === 0
            ? index % 2 !== 0
              ? el.toLowerCase()
              : el.toUpperCase()
            : index % 2 !== 0
            ? el.toUpperCase()
            : el.toLowerCase();
        })
        .join("")
    );
  }

  return answer;
}

//-----------------------------------------------------------------------------------------------------------//
// Row Weights

function rowWeights(array) {
  let firstTeam = 0;
  let secondTeam = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      secondTeam += array[i];
    } else {
      firstTeam += array[i];
    }
  }
  return [firstTeam, secondTeam];
}

//-----------------------------------------------------------------------------------------------------------//
// Leap Years

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Factorial

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

//-----------------------------------------------------------------------------------------------------------//
// Remove duplicate words

function removeDuplicateWords(s) {
  let uniqueString = new Set(s.split(" "));
  return [...uniqueString].join(" ");
}

//-----------------------------------------------------------------------------------------------------------//
// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  count = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === "Europe" && list[i].language === "JavaScript") {
      count += 1;
    }
  }

  return count;
}

//-----------------------------------------------------------------------------------------------------------//
// JavaScript Array Filter

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((el) => el % 2 === 0);
}

//-----------------------------------------------------------------------------------------------------------//
// Largest pair sum in array

function largestPairSum(numbers) {
  let numbersCopy = [...numbers];
  let firstMaxValue = Math.max(...numbersCopy);
  numbersCopy.splice(numbersCopy.indexOf(firstMaxValue), 1);
  let secondMaxValue = Math.max(...numbersCopy);

  return firstMaxValue + secondMaxValue;
}

//-----------------------------------------------------------------------------------------------------------//
// Are the numbers in order?

function inAscOrder(arr) {
  let sortArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) {
      return false;
    }
  }

  return true;
}

//-----------------------------------------------------------------------------------------------------------//
// Greet Me

var greet = function (name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};

//-----------------------------------------------------------------------------------------------------------//
// Fizz Buzz

function fizzbuzz(n) {
  let resultArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultArr.push("Fizz");
    } else if (i % 5 === 0) {
      resultArr.push("Buzz");
    } else {
      resultArr.push(i);
    }
  }

  return resultArr;
}

//-----------------------------------------------------------------------------------------------------------//
// Predict your age!

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      [age1, age2, age3, age4, age5, age6, age7, age8]
        .map((el) => el * el)
        .reduce((currentSum, currentNumber) => currentSum + currentNumber)
    ) / 2
  );
}

//-----------------------------------------------------------------------------------------------------------//
// No oddities here

function noOdds(values) {
  return values.filter((el) => el % 2 === 0);
}

//-----------------------------------------------------------------------------------------------------------//
// Even numbers in an array

function evenNumbers(array, number) {
  return array.filter((el) => el % 2 === 0).slice(-number);
}

//-----------------------------------------------------------------------------------------------------------//
// Sum of Cubes

function sumCubes(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .map((el) => Math.pow(el, 3))
    .reduce((sum, currentEl) => sum + currentEl);
}

//-----------------------------------------------------------------------------------------------------------//
// Bumps in the Road

function bump(x) {
  let array = x.split("");
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "n") {
      count++;
    }
  }
  return count > 15 ? "Car Dead" : "Woohoo!";
}

//-----------------------------------------------------------------------------------------------------------//
//Sorted? yes? no? how?

function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      ascending = false;
    }
    if (array[i] > array[i - 1]) {
      descending = false;
    }
  }

  if (ascending) return "yes, ascending";
  if (descending) return "yes, descending";
  return "no";
}

//-----------------------------------------------------------------------------------------------------------//
// Alphabet war

function alphabetWar(fight) {
  let leftSidePower = { w: 4, p: 3, b: 2, s: 1 };
  let rightSidePower = { m: 4, q: 3, d: 2, z: 1 };

  let leftSideScore = 0;
  let rightSideScore = 0;

  for (const char of fight) {
    if (leftSidePower[char]) {
      leftSideScore += leftSidePower[char];
    } else if (rightSidePower[char]) {
      rightSideScore += rightSidePower[char];
    }
  }

  if (leftSideScore > rightSideScore) {
    return "Left side wins!";
  } else if (rightSideScore > leftSideScore) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Reverse a Number

function reverseNumber(n) {
  const reversed = Math.abs(n).toString().split("").reverse().join("");
  return Math.sign(n) * parseInt(reversed, 10);
}

//-----------------------------------------------------------------------------------------------------------//
// Reverse a Number

function adjacentElementsProduct(array) {
  let maxValue = array[0] * array[1];

  for (let i = 1; i < array.length; i++) {
    if (array[i] * array[i + 1] > maxValue) {
      maxValue = array[i] * array[i + 1];
    }
  }

  return maxValue;
}

//-----------------------------------------------------------------------------------------------------------//
// Find the vowels

function vowelIndices(word) {
  const vowels = ["a", "e", "i", "o", "u", "y"];

  return word
    .split("")
    .map((el, index) => (vowels.includes(el.toLowerCase()) ? index + 1 : -1))
    .filter((index) => index !== -1);
}

//-----------------------------------------------------------------------------------------------------------//
// Convert an array of strings to array of numbers

function toNumberArray(stringarray) {
  return stringarray.map((el) => Number(el));
}

//-----------------------------------------------------------------------------------------------------------//
// Sort the Gift Code

function sortGiftCode(code) {
  return code
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Sort the Gift Code

function findLongest(array) {
  let arrayString = array.map((el) => String(el));
  let mostDigit = arrayString[0];

  for (let i = 1; i < array.length; i++) {
    if (arrayString[i].length > mostDigit.length) {
      mostDigit = arrayString[i];
    }
  }

  return Number(mostDigit);
}

//-----------------------------------------------------------------------------------------------------------//
// Number of Decimal Digits

function digits(n) {
  return String(n).split("").length;
}

//-----------------------------------------------------------------------------------------------------------//
// Power of two

function isPowerOfTwo(n) {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }

  return true;
}

//-----------------------------------------------------------------------------------------------------------//
// All unique

function hasUniqueChars(str) {
  let arr = str.split("");
  let uniqueArr = [...new Set(str.split(""))];
  return JSON.stringify(arr) === JSON.stringify(uniqueArr);
}

//-----------------------------------------------------------------------------------------------------------//
// Sum even numbers

function sumEvenNumbers(input) {
  return input.filter((el) => el % 2 === 0).reduce((sum, evenNumber) => sum + evenNumber, 0);
}

//-----------------------------------------------------------------------------------------------------------//
// Switcheroo

function switcheroo(x) {
  let arr = x.split("");
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      answer += "b";
    } else if (arr[i] === "b") {
      answer += "a";
    } else {
      answer += arr[i];
    }
  }

  return answer;
}

//-----------------------------------------------------------------------------------------------------------//
// Sum of array singles

function repeats(arr) {
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((sum, num) => sum + num, 0);
}

//-----------------------------------------------------------------------------------------------------------//
//Odd-Even String Sort

function sortMyString(S) {
  let evenNumber = "";
  let oddNumber = "";

  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      evenNumber += S[i];
    } else {
      oddNumber += S[i];
    }
  }

  return `${evenNumber} ${oddNumber}`;
}

//-----------------------------------------------------------------------------------------------------------//
//Filter the number

function filterString(value) {
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return Number(
    value
      .split("")
      .filter((el) => numberArr.includes(el))
      .join("")
  );
}

//-----------------------------------------------------------------------------------------------------------//
// Divide and Conquer

function divCon(x) {
  let numberSum = x.filter((el) => el === Number(el)).reduce((sum, el) => sum + el, 0);
  let stringSum = x
    .filter((el) => el !== Number(el))
    .map((el) => Number(el))
    .reduce((sum, el) => sum + el, 0);

  return numberSum - stringSum;
}

//-----------------------------------------------------------------------------------------------------------//
// Build a square

function generateShape(integer) {
  let str = "";
  for (let i = 1; i <= integer * integer; i++) {
    str += "+";
    if (i % integer === 0 && i !== integer * integer) {
      str += "\n";
    }
  }

  return str;
}

//-----------------------------------------------------------------------------------------------------------//
// Build a square

function cookingTime(eggs) {
  if (eggs <= 0) return 0;
  else {
    return Math.ceil(eggs / 8) * 5;
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Stop gninnipS My sdroW!

function spinWords(string) {
  return string
    .split(" ")
    .map((el) => (el.length < 5 ? el : el.split("").reverse().join("")))
    .join(" ");
}

//-----------------------------------------------------------------------------------------------------------//
// Find the odd int

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    const count = A.filter((el) => el === A[i]).length;
    if (count % 2 !== 0) return A[i];
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Array.diff

function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el));
}

//-----------------------------------------------------------------------------------------------------------//
// Sum of Digits / Digital Root

function digitalRoot(n) {
  let answer = n;

  while (answer >= 10) {
    answer = String(answer)
      .split("")
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
  }

  return answer;
}

//-----------------------------------------------------------------------------------------------------------//
// Find The Parity Outlier

function findOutlier(integers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) even.push(integers[i]);
    else odd.push(integers[i]);
  }

  return odd.length > even.length ? even[0] : odd[0];
}

//-----------------------------------------------------------------------------------------------------------//
// Find The Parity Outlier

function persistence(num) {
  let count = 0;
  let arrNum = String(num).split("").map(Number);

  while (arrNum.length > 1) {
    x = arrNum.reduce((sum, el) => sum * el, 1);
    count++;
    arrNum = String(x).split("").map(Number);
  }

  return count;
}

//-----------------------------------------------------------------------------------------------------------//
// Valid Parentheses

function validParentheses(parenStr) {
  let count = 0;
  for (char of parenStr) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

//-----------------------------------------------------------------------------------------------------------//
// Maximum Length Difference

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let arr1 = a1.map((el) => (el = el.length));
  let arr2 = a2.map((el) => (el = el.length));
  let version1 = Math.abs(Math.max(...arr2) - Math.min(...arr1));
  let version2 = Math.abs(Math.max(...arr1) - Math.min(...arr2));
  return version1 > version2 ? version1 : version2;
}

//-----------------------------------------------------------------------------------------------------------//
// Valid Braces

function validBraces(braces) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of braces) {
    if (pairs[char]) {
      stack.push(pairs[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
}

//-----------------------------------------------------------------------------------------------------------//
//   The Supermarket Queue

function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  if (customers.length <= n) return Math.max(...customers);

  let cashierArr = Array(n).fill(0);

  for (let el of customers) {
    let min = Math.min(...cashierArr);
    let index = cashierArr.indexOf(min);

    cashierArr[index] += el;
  }

  return Math.max(...cashierArr);
}

//-----------------------------------------------------------------------------------------------------------//
//  Mexican Wave

function wave(str) {
  let waveArr = [];

  for (let i = 0; i < str.length; i++) {
    let waveStr = "";
    if (str[i] === " ") continue;
    for (let j = 0; j < str.length; j++) {
      if (j === i) {
        waveStr += str[j].toUpperCase();
      } else {
        waveStr += str[j].toLowerCase();
      }
    }
    waveArr.push(waveStr);
  }
  return waveArr;
}

//-----------------------------------------------------------------------------------------------------------//
//  Count characters in your string

function count(string) {
  let answer = {};

  for (let i = 0; i < string.length; i++) {
    if (!answer.hasOwnProperty(string[i])) {
      answer[string[i]] = 1;
    } else if (string[i] in answer) {
      answer[string[i]] += 1;
    }
  }

  return answer;
}
