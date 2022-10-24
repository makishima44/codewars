function twiceAsOld(dadYearsOld, sonYearsOld) {
   if(sonYearsOld * 2 > dadYearsOld ) {
    return -(dadYearsOld - sonYearsOld * 2);
   } else if (sonYearsOld * 2 < dadYearsOld) {
     return dadYearsOld - sonYearsOld * 2;
   } else {
    return  0;
   }
}
