function numberToPower(number, power){
    let str = 1;
    for(let i = 0; i < power; i++) {
        str = str * number;
    }
    return str;
}

console.log(numberToPower(10,4))




