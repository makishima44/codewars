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
//Find the middle element

function gimme(triplet) {
  const min = Math.min(...triplet);
  const max = Math.max(...triplet);
  return triplet.findIndex((el) => el !== min && el !== max);
}

