function squareOrSquareRoot(array) {
    const newArray = array.map(p => {
        if(Number.isInteger(Math.sqrt(p))) {
            return Math.sqrt(p);
        } else {
            return p * p;
        }
    })
    return newArray;
  }
  
