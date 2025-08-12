function uncensor(infected, discovered) {
  const arr = infected.split("");
  let str = discovered;
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      result += str[0];

      str = str.slice(1);
      console.log(discovered);
    } else {
      result += arr[i];
    }
  }

  return result;
}
