function modifyMultiply (str,loc,num) {
   arr1 = str.split(" ");
   arr2 = [];
   let string = arr1[loc];
   for(let i = 0; i < num; i++) {
        arr2.push(string);
   }
   return arr2.join("-")
} 

