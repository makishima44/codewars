function findAverage(array) {
    let answer = 0;
    if (array.length <= 0){
     return 0;
     } else {
       
       for(let i = 0; i < array.length; i++) {
         answer += array[i];
       }
     }
     return answer / (array.length )
}
