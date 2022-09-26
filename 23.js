function getDivisorsCnt(n){
    let x = 0; 
    for (let i = 1; i <= n; i++) {
      if (n % i == 0)  {
        x += 1; 
    }
  }
  return x;
}
