function minimum(a, x) {
    let min = a % x;
    if( x === 0) {
        return 0;
    } else if (min < x / 2) {
        return min;
    } else {
        return x - min;
    }
   
}

console.log(minimum(129, 49));



