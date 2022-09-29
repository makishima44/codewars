function squareSum(numbers){
    let answer = 0;
    for(let i = 0; i < numbers.length; i++) {
      answer += Math.pow(numbers[i], 2);
    }
    return answer ;
  }

  console.log(squareSum([1,2]));


