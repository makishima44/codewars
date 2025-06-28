function convertPalindromes(numbers) {
  return numbers.map((num) => {
    const str = String(num);
    return str === str.split("").reverse().join("") ? 1 : 0;
  });
}
