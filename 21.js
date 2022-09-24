var summation = function (num) { 
    let summ = 0;
    let arr = [];

    for(let i = 0; i <= num; i++){
        arr.push(i);
        summ +=arr[i]
   }

  return summ; 
}
