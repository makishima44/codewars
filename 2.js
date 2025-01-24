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
