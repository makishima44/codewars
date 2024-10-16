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
