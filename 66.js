function numberToPower(number, power){
    let str = number;
    if(power === 0) {
        return 1;
    }
    for(let i = 1; i < power; i++) {
        str *= number
    }
    return str;
}

