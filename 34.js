function makeNegative(num) {
    if(num === 0) {
      return 0;
    } else if (Math.sign(num) === -1) {
      return num;
    } else if (Math.sign(num) === 1) {
      return num - num * 2
    }
  }


