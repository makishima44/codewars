//-----------------------------------------------------------------------------------------------------------//
// Simple remove duplicates

function solve(arr) {
  const seen = [];
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!seen.includes(arr[i])) {
      seen.push(arr[i]);
      result.push(arr[i]);
    }
  }

  return result.reverse();
}

//-----------------------------------------------------------------------------------------------------------//
// Array Helpers

Array.prototype.square = function () {
  return this.map((el) => Math.pow(el, 2));
};

Array.prototype.cube = function () {
  return this.map((el) => Math.pow(el, 3));
};

Array.prototype.average = function () {
  return this.length === 0 ? NaN : this.reduce((sum, num) => sum + num, 0) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((sum, num) => sum + num, 0);
};

Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((el) => el % 2 !== 0);
};

//-----------------------------------------------------------------------------------------------------------//
// Simple string characters

function solve(s) {
  if (s === "") return [0, 0, 0, 0];

  if (s.length) {
    let upper = s.match(/[A-Z]/g) || [];
    let lower = s.match(/[a-z]/g) || [];
    let numbers = s.match(/\d/g) || [];
    let specChar = s.match(/[^a-zA-Z0-9\s]/g) || [];

    return [upper.length, lower.length, numbers.length, specChar.length];
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Smallest value of an array

function min(arr, toReturn) {
  let minValue = Math.min(...arr);

  if (toReturn === "value") return minValue;
  if (toReturn === "index") return arr.indexOf(minValue);
}

//-----------------------------------------------------------------------------------------------------------//
// Bit Counting

var countBits = function (n) {
  let binaryArr = n.toString(2).split("");
  let count = 0;

  for (let number of binaryArr) {
    if (number === "1") count++;
  }

  return count;
};

//-----------------------------------------------------------------------------------------------------------//
// Convert string to camel case

function toCamelCase(str) {
  let arr = str.split(/[-_]/);

  let answer = arr.map((word, index) => {
    if (index === 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });

  return answer.join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Delete occurrences of an element if it occurs more than n times

function deleteNth(arr, n) {
  let count = {};
  let answer = [];

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] <= n) {
      answer.push(num);
    }
  }

  return answer;
}

//-----------------------------------------------------------------------------------------------------------//
// The Vowel Code

function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return string.replace(/[aeiou]/g, (match) => code[match]);
}

function decode(string) {
  let code = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  return string.replace(/\d/g, (match) => code[match]);
}

//-----------------------------------------------------------------------------------------------------------//
// Write Number in Expanded Form

function expandedForm(num) {
  let str = num.toString();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    const digit = str[i];
    const placeValue = Math.pow(10, str.length - 1 - i);
    if (digit !== "0") {
      result.push(digit * placeValue);
    }
  }

  return result.join(" + ");
}

//-----------------------------------------------------------------------------------------------------------//
//  Validate Credit Card Number

function validate(n) {
  let arr = n.toString().split("").map(Number);
  let newArr = [];

  if (arr.length % 2 === 0) {
    newArr = arr.map((el, index) => {
      if (index % 2 === 0) {
        return el * 2;
      }
      return el;
    });
  } else if (arr.length % 2 !== 0) {
    newArr = arr.map((el, index) => {
      if (index % 2 !== 0) {
        return el * 2;
      }
      return el;
    });
  }

  let sum = newArr
    .map((el) => {
      if (el > 9) {
        return el
          .toString()
          .split("")
          .reduce((sum, el) => sum + parseInt(el), 0);
      }
      return Number(el);
    })
    .reduce((sum, el) => sum + el, 0);

  return sum % 10 === 0 ? true : false;
}

//-----------------------------------------------------------------------------------------------------------//
//  Ordered Count of Characters

const orderedCount = function (text) {
  let uniqueArr = [...new Set(text.split(""))];
  let resultArr = [];

  for (let char of uniqueArr) {
    const regex = new RegExp(`${char}`, "g");
    resultArr.push([char, text.match(regex).length]);
  }

  return resultArr;
};

//-----------------------------------------------------------------------------------------------------------//
// Break camelCase

function solution(string) {
  let arr = [];
  let word = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase() && i !== 0) {
      arr.push(word);
      word = string[i];
    } else {
      word += string[i];
    }
  }

  if (word) {
    arr.push(word);
  }

  return arr.join(" ");
}

//-----------------------------------------------------------------------------------------------------------//
// Break camelCase

function dataReverse(data) {
  const segmentSize = 8;
  let segments = [];

  for (let i = 0; i < data.length; i += segmentSize) {
    const segment = data.slice(i, i + segmentSize);
    segments.push(segment);
  }

  segments.reverse();
  return segments.flat();
}

//-----------------------------------------------------------------------------------------------------------//
// Reverse every other word in the string

function reverse(str) {
  const arr = str.split(" ");
  return arr
    .map((el, index) => {
      if (index % 2 !== 0) return el.split("").reverse().join("");
      else return el;
    })
    .join(" ")
    .trim();
}

//-----------------------------------------------------------------------------------------------------------//
// Lost number in number sequence

function findDeletedNumber(arr, mixArr) {
  const sortMixArr = mixArr.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortMixArr[i]) {
      result = arr[i];
      break;
    }
  }

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Kebabize

function kebabize(str) {
  let result = "";
  const strWithoutNumber = str.replace(/[0-9]/g, "");

  for (let i = 0; i < strWithoutNumber.length; i++) {
    if (strWithoutNumber[i] !== strWithoutNumber[i].toUpperCase()) {
      result += strWithoutNumber[i];
    } else {
      if (i === 0) {
        result += `${strWithoutNumber[i].toLowerCase()}`;
      } else {
        result += `-${strWithoutNumber[i].toLowerCase()}`;
      }
    }
  }
  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

function isRubyComing(list) {
  let result = false;

  for (const user of list) {
    if (user.language === "Ruby") result = true;
  }

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Make the Deadfish Swim

function parse(data) {
  let value = 0;
  let result = [];

  const instructions = {
    i: () => value++,
    d: () => value--,
    s: () => (value *= value),
    o: () => result.push(value),
  };

  for (const char of data) {
    if (instructions[char]) {
      instructions[char]();
    }
  }

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Strong Number (Special Numbers Series #2)

function strong(n) {
  let arr = Array.from(String(n), Number);
  let arrFactorials = [];

  for (const num of arr) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }

    arrFactorials.push(factorial);
  }

  return arrFactorials.reduce((sum, num) => sum + num, 0) === n ? "STRONG!!!!" : "Not Strong !!";
}

//-----------------------------------------------------------------------------------------------------------//
// +1 Array

function upArray(arr) {
  if ((arr.length <= 0) | arr.some((el) => (el < 0) | (String(el).length > 1))) return null;

  const leadingZeros = arr.findIndex((el) => el !== 0);
  const leadingZeroCount = leadingZeros === -1 ? arr.length : leadingZeros;

  const incremented = (BigInt(arr.join("")) + 1n).toString();
  const result = Array.from(incremented, Number);

  return Array(leadingZeroCount).fill(0).concat(result);
}

//-----------------------------------------------------------------------------------------------------------//
// Array element parity

function solve(arr) {
  return arr.filter((num) => !arr.includes(-num))[0];
}

//-----------------------------------------------------------------------------------------------------------//
// Balanced Number (Special Numbers Series #1 )

function balancedNum(number) {
  let arr = String(number).split("").map(Number);
  let result = "";

  if (arr.length <= 2) result = "Balanced";

  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    let leftSum = arr.slice(0, middleIndex).reduce((sum, num) => sum + num, 0);
    let rightSum = arr.slice(middleIndex + 1).reduce((sum, num) => sum + num, 0);
    result = leftSum === rightSum ? "Balanced" : "Not Balanced";
  } else {
    let leftSum = arr.slice(0, middleIndex - 1).reduce((sum, num) => sum + num, 0);
    let rightSum = arr.slice(middleIndex + 1).reduce((sum, num) => sum + num, 0);
    result = leftSum === rightSum ? "Balanced" : "Not Balanced";
  }

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Same Array?

function same(aArr, bArr) {
  const sortedAArr = aArr.map((el) => el.sort()).sort();
  const sortedbArr = bArr.map((el) => el.sort()).sort();
  let result = true;

  if (sortedAArr.length === sortedbArr.length) {
    for (let i = 0; i < sortedAArr.length; i++) {
      for (let j = 0; j < sortedAArr[i].length; j++) {
        if (sortedAArr[i][j] !== sortedbArr[i][j]) {
          result = false;
        }
      }
    }
  } else result = false;

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Simple consecutive pairs

function pairs(ar) {
  let count = 0;

  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] - 1 === ar[i + 1] || ar[i] + 1 === ar[i + 1]) count++;
  }

  return count;
}

//-----------------------------------------------------------------------------------------------------------//
// String array duplicates

function dup(s) {
  return s.map((el) => el.replace(/([a-zA-Z])\1+/g, "$1"));
}

//-----------------------------------------------------------------------------------------------------------//
// Simple Fun #318: Sort String

function sortString(s) {
  const letters = [...s]
    .filter((char) => /[a-z]/i.test(char))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  let index = 0;

  return [...s].map((char) => (/[a-z]/i.test(char) ? letters[index++] : char)).join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Reversing Fun

function flipNumber(n) {
  let result = n.split("");

  for (let i = 0; i < n.length; i++) {
    let part = result.slice(i);
    part.reverse();
    result = result.slice(0, i).concat(part);
  }

  return result.join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Sorted Union

function uniteUnique() {
  const arr = [...arguments].flat();
  const uniqueArr = new Set(arr);
  return [...uniqueArr];
}

//-----------------------------------------------------------------------------------------------------------//
// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

function greetDevelopers(list) {
  return list.map((el) => ({
    ...el,
    greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`,
  }));
}

//-----------------------------------------------------------------------------------------------------------//
// Help the Fruit Guy

function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) return [];
  return bagOfFruits.map((el) => (el.startsWith("rotten") ? el.substring(6).toLowerCase() : el));
}

//-----------------------------------------------------------------------------------------------------------//
// Pair of gloves

function numberOfPairs(gloves) {
  const glovesMap = {};

  gloves.forEach((el) => {
    if (glovesMap[el]) {
      glovesMap[el]++;
    } else {
      glovesMap[el] = 1;
    }
  });

  let pairGloves = 0;
  for (const key in glovesMap) {
    if (glovesMap[key] >= 2) {
      pairGloves += Math.floor(glovesMap[key] / 2);
    }
  }

  return pairGloves;
}

//-----------------------------------------------------------------------------------------------------------//
// Decipher this!

function decipherThis(str) {
  return str
    .split(" ")
    .map((word) => {
      let match = word.match(/^\d+/);
      if (!match) return word;

      let firstCharCode = parseInt(word.match(/^\d+/)[0]);
      let rest = word.replace(/^\d+/, "").split("");

      if (rest.length > 1) {
        [rest[0], rest[rest.length - 1]] = [rest[rest.length - 1], rest[0]];
      }
      return String.fromCharCode(firstCharCode) + rest.join("");
    })
    .join(" ");
}

//-----------------------------------------------------------------------------------------------------------//
// Char Code Calculation

function calc(x) {
  const total1 = x
    .split("")
    .map((el) => el.charCodeAt(0))
    .join("");

  const total2 = total1.replaceAll("7", "1");

  const sum1 = total1
    .split("")
    .map(Number)
    .reduce((sum, el) => sum + el, 0);

  const sum2 = total2
    .split("")
    .map(Number)
    .reduce((sum, el) => sum + el, 0);

  return sum1 - sum2;
}

//-----------------------------------------------------------------------------------------------------------//
// Longest vowel chain

function solve(s) {
  const pattern = /[aeiouAEIOU]/;

  let currentCount = 0;
  let maxCount = 0;

  for (let char of s) {
    if (pattern.test(char)) {
      currentCount += 1;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      currentCount = 0;
    }
  }

  return maxCount;
}

//-----------------------------------------------------------------------------------------------------------//
// New Cashier Does Not Know About Space or Shift

function getOrder(input) {
  const menu = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ];

  const count = {};

  menu.forEach((item) => {
    const regex = new RegExp(item, "g");
    const matches = input.match(regex);
    if (matches) {
      count[item] = matches.length;
    }
  });

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  const result = [];

  menu.forEach((item) => {
    for (let i = 0; i < count[item]; i++) {
      result.push(capitalize(item));
    }
  });

  return result.join(" ");
}

//-----------------------------------------------------------------------------------------------------------//
// SevenAte9

function sevenAte9(str) {
  let numArr = str.split("");

  for (let i = numArr.length - 2; i >= 1; i--) {
    if (numArr[i] === "9" && numArr[i - 1] === "7" && numArr[i + 1] === "7") {
      numArr.splice(i, 1);
    }
  }

  return numArr.join("");
}

//-----------------------------------------------------------------------------------------------------------//
// FIXME: Get Full Name

class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Sort by Last Char

function last(x) {
  return x.split(" ").sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
}

//-----------------------------------------------------------------------------------------------------------//
// Alphabet symmetry

function solve(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const filteredItems = [];

  for (const word of arr) {
    let filtered = word
      .toLowerCase()
      .split("")
      .filter((el, index) => index + 1 === alphabet.indexOf(el) + 1);

    filteredItems.push(filtered.length);
  }

  return filteredItems;
}

//-----------------------------------------------------------------------------------------------------------//
// Over The Road

function overTheRoad(address, n) {
  const evenLength = 2 * n;
  const count = (address + 1) / 2;

  return evenLength - (count * 2 - 2);
}

//-----------------------------------------------------------------------------------------------------------//
// Highest Rank Number in an Array

function highestRank(arr) {
  const frequencyMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]]) {
      frequencyMap[arr[i]] += 1;
    } else {
      frequencyMap[arr[i]] = 1;
    }
  }

  const maxFrequency = Math.max(...Object.values(frequencyMap));
  const maxFrequencyArr = [];

  for (const key in frequencyMap) {
    if (frequencyMap[key] === maxFrequency) {
      maxFrequencyArr.push(Number(key));
    }
  }

  return Math.max(...maxFrequencyArr);
}

//-----------------------------------------------------------------------------------------------------------//
// Sort Out The Men From Boys

function menFromBoys(arr) {
  const evenUniqueSort = new Set(arr.filter((el) => el % 2 === 0).sort((a, b) => a - b));
  const oddUniqueSort = new Set(arr.filter((el) => el % 2 !== 0).sort((a, b) => b - a));

  return [...evenUniqueSort, ...oddUniqueSort];
}

//-----------------------------------------------------------------------------------------------------------//
// esreveR

reverse = function (array) {
  let reverseArr = [];
  for (let i = 0; i < array.length; i++) {
    reverseArr.unshift(array[i]);
  }

  return reverseArr;
};

//-----------------------------------------------------------------------------------------------------------//
// filterEvenLengthWords;

function filterEvenLengthWords(words) {
  return words.filter((el) => el.length % 2 === 0);
}

//-----------------------------------------------------------------------------------------------------------//
// Password maker

function makePassword(phrase) {
  return phrase
    .split(" ")
    .map((word) => {
      if (word[0].toLowerCase() === "i") {
        return 1;
      } else if (word[0].toLowerCase() === "o") {
        return 0;
      } else if (word[0].toLowerCase() === "s") {
        return 5;
      } else {
        return word[0];
      }
    })
    .join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Remove consecutive duplicate words

function removeConsecutiveDuplicates(string) {
  let result = "";
  let stringArr = string.split(" ");

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] !== stringArr[i + 1]) {
      result += stringArr[i] + " ";
    }
  }

  return result.trim();
}

//-----------------------------------------------------------------------------------------------------------//
// Remove consecutive duplicate words

function merryChristmas(s) {
  function countLetters(text) {
    const count = {};
    for (const char of text) {
      if (/[a-zA-Z]/.test(char)) {
        count[char] = (count[char] || 0) + 1;
      }
    }
    return count;
  }

  const strCount = countLetters(s);
  const wordCount = countLetters("Merry Christmas");

  let minOccurrences = Infinity;
  for (const char in wordCount) {
    if (!strCount[char]) {
      return 0;
    }

    const occurrences = Math.floor(strCount[char] / wordCount[char]);
    if (occurrences < minOccurrences) {
      minOccurrences = occurrences;
    }
  }

  return minOccurrences;
}

//-----------------------------------------------------------------------------------------------------------//
// Digits explosion

function explode(s) {
  return s
    .split("")
    .map((el) => (el !== "0" ? el.repeat(Number(el)) : ""))
    .join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Sum of integers in string

function sumOfIntegersInString(s) {
  let arrNumber = s.match(/\d+/g) || [];

  if (arrNumber.length) {
    return arrNumber.map(Number).reduce((sum, el) => sum + el, 0);
  } else {
    return 0;
  }
}

//-----------------------------------------------------------------------------------------------------------//
// Character with longest consecutive repetition

function longestRepetition(s) {
  if (s.length <= 0) return ["", 0];

  let maxChar = "";
  let maxCount = 0;
  let currentChar = s[0];
  let currentCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChar = currentChar;
      }

      currentChar = s[i];
      currentCount = 1;
    }
  }

  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxChar = currentChar;
  }

  return [maxChar, maxCount];
}

//-----------------------------------------------------------------------------------------------------------//
// Halving Sum

function halvingSum(n) {
  let sum = n;
  let x = n;

  while (x > 1) {
    x = Math.floor(x / 2);
    sum += x;
  }

  return sum;
}

//-----------------------------------------------------------------------------------------------------------//
// Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
  const sortArr = arr.sort((a, b) => a - b);
  const mid = sortArr.length / 2;

  const minArr = sortArr.slice(0, mid);
  const maxArr = sortArr.slice(mid).reverse();

  let result = 0;
  for (let i = 0; i < maxArr.length; i++) {
    result += minArr[i] * maxArr[i];
  }

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Parts of a list

function partlist(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
  }

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Palindrome chain length

var palindromeChainLength = function (n) {
  let steps = 0;
  let currentNumber = n;

  while (true) {
    const str = currentNumber.toString();
    if (str === str.split("").reverse().join("")) {
      return steps;
    }
    const reversedNumber = parseInt(str.split("").reverse().join(""), 10);
    currentNumber += reversedNumber;

    steps++;
  }
};

//-----------------------------------------------------------------------------------------------------------//
// Detect Pangram

function isPangram(string) {
  const alphabetObject = {};

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i);
    alphabetObject[letter] = 0;
  }

  let lettersArr = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  for (let i = 0; i < lettersArr.length; i++) {
    if (alphabetObject.hasOwnProperty(lettersArr[i])) {
      alphabetObject[lettersArr[i]]++;
    }
  }

  for (const letter in alphabetObject) {
    if (alphabetObject[letter] === 0) {
      return false;
    }
  }

  return true;
}

//-----------------------------------------------------------------------------------------------------------//
// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

function getFirstPython(list) {
  for (const developer of list) {
    if (developer["language"] === "Python") {
      return `${developer["firstName"]}, ${developer["country"]}`;
    } else {
    }
  }

  return "There will be no Python developers";
}

//-----------------------------------------------------------------------------------------------------------//
//  Incrementer

function incrementer(nums) {
  return nums.map((el, index) => {
    if (el + (index + 1) >= 10) {
      return (el + (index + 1)) % 10;
    } else return el + (index + 1);
  });
}

//-----------------------------------------------------------------------------------------------------------//
// Product Of Maximums Of Array (Array Series #2)

function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((sum, el) => sum * el);
}

//-----------------------------------------------------------------------------------------------------------//
// The old switcheroo

function vowel2index(str) {
  const regex = /[aeiou]/i;
  return str
    .split("")
    .map((el, index) => (regex.test(el) ? index + 1 : el))
    .join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Elevator Distance

function elevatorDistance(array) {
  let result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      result += array[i] - array[i + 1];
    } else {
      result += array[i + 1] - array[i];
    }
  }

  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Help Bob count letters and digits.

function countLettersAndDigits(input) {
  const regex = /[a-zA-Z0-9]/g;
  const matches = input.match(regex);
  return matches ? matches.length : 0;
}

//-----------------------------------------------------------------------------------------------------------//
// Evens times last

function evenLast(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      count += numbers[i];
    }
  }

  return count ? count * numbers[numbers.length - 1] : 0;
}

//-----------------------------------------------------------------------------------------------------------//
// Numbers to Letters

function switcher(x) {
  const alphabet = {
    1: "z",
    2: "y",
    3: "x",
    4: "w",
    5: "v",
    6: "u",
    7: "t",
    8: "s",
    9: "r",
    10: "q",
    11: "p",
    12: "o",
    13: "n",
    14: "m",
    15: "l",
    16: "k",
    17: "j",
    18: "i",
    19: "h",
    20: "g",
    21: "f",
    22: "e",
    23: "d",
    24: "c",
    25: "b",
    26: "a",
    27: "!",
    28: "?",
    29: " ",
  };

  return x.map((el) => alphabet[Number(el)]).join("");
}

//-----------------------------------------------------------------------------------------------------------//
// Consecutive items

function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === a && arr[i + 1] === b) || (arr[i] === b && arr[i + 1] === a)) return true;
  }
  return false;
}

//-----------------------------------------------------------------------------------------------------------//
// Disarium Number (Special Numbers Series #3)

function disariumNumber(n) {
  let result = 0;

  String(n)
    .split("")
    .map((el, index) => (result += Math.pow(el, index + 1)));

  return result === n ? "Disarium !!" : "Not !!";
}

//-----------------------------------------------------------------------------------------------------------//
// Squares sequence

function squares(x, n) {
  if (n <= 0) return [];
  let result = [];
  let current = x;

  for (let i = 1; i <= n; i++) {
    result.push(current);
    current = Math.pow(current, 2);
  }
  return result;
}

//-----------------------------------------------------------------------------------------------------------//
// Nth Smallest Element (Array Series #4)

function nthSmallest(arr, pos) {
  let sortArr = arr.sort((a, b) => a - b);
  return sortArr[pos - 1];
}

//-----------------------------------------------------------------------------------------------------------//
// Automorphic Number (Special Numbers Series #6)

function automorphic(n) {
  const squareNumStr = String(Math.pow(n, 2));
  return squareNumStr.endsWith(String(n)) ? "Automorphic" : "Not!!";
}
