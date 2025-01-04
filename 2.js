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
