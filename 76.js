function fakeBin(x){
   let arr = x.split("").map(i => {
    if( Number(i) < 5) {
       return i = "0";
    } else if( Number(i) >= 5) {
       return i = "1";
    }
   } ).join("");
    return arr;
}

console.log(fakeBin('45385593107843568'))