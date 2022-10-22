function findDifference(a, b) {
    let dif = (a[0] * a[1] * a[2] ) - (b[0] * b[1] * b[2]);
    if(Math.sign(dif) === -1) {
        return - dif;
    } else return dif;
   
}
