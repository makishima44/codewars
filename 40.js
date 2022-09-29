function countSheeps(arrayOfSheep) {
    let answer = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i] == false || arrayOfSheep[i] == null || arrayOfSheep[i] == undefined) {
        answer +=0;
      } else {
        answer +=1;
      } 
    }
    return answer;
  }
  