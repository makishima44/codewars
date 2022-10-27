function squareDigits(num){
    let arr = [];

    num = String(num).split("").map(i => {
        return arr.push(Math.pow(i, 2));   
    });

    return Number(arr.join(""));
}
