function printerError(s) {
    let bad = ["n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let countBad = 0;
    for(let i = 0; i < s.length; i++) {
        for(let y = 0; y < bad.length; y++) {
            if(s[i] === bad[y]) {
                countBad += 1;
            }
        }
    }
    return countBad + "/" + s.length;
}
