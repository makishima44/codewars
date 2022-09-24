function getCount(str) {
    let x = 0;
    let arr = ["a", "e", "i", "o", "u"]
    for(i = 0; i < str.length; i++) {
        for(y = 0; y < arr.length; y++) {
            if(str[i] == arr[y]) {
                x += 1;
            }
        }
    }
    return x;
}

