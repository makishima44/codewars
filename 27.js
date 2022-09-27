var humanYearsCatYearsDogYears = function(humanYears) {
    let catYear = 0;
    let dogYear = 0;
    for(let i = 1; i <= humanYears; i++) {
      if(i == 1) {
        catYear += 15;
        dogYear += 15;
      }  else if (i == 2) {
         catYear += 9;
         dogYear += 9;
      } else if (i >= 3) {
         catYear += 4;
         dogYear += 5;
      }
      
    }
    return [humanYears, catYear, dogYear];
 }
 