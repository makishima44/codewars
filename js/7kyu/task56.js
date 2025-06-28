function multiplyAll(arr) {
  return function (n) {
    return arr.map((el) => el * n);
  };
}

console.log(multiplyAll([1, 2, 3])(2));
