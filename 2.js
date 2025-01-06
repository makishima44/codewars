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
// Validate Credit Card Number

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
