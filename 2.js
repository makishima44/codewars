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
