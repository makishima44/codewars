function highAndLow(numbers){
    let arr = numbers.split(" ")
    return [Math.max.apply(null, arr), Math.min.apply(null, arr)].join(", ");
  }

  console.log(highAndLow(("8 3 -5 42 -1 0 0 -9 4 7 4 -4")))