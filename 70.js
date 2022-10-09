function descendingOrder(n){
   let array = Array.from(String(n));
   let array2 = [];
   for(let i = 0; i < array.length; i++) {
        array2.push(Number(array[i]));
   }
    function compareNumbers(a,b) {
        return a - b;
    }

   return Number(array2.sort(compareNumbers).reverse().join(""))
}
