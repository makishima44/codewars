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

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
