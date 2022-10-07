function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1,...arr2];
  summ = 0;
    for(let i = 0 ; i < arr.length; i++) {
        summ += arr[i];
    }
    return summ;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))


