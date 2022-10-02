function sum (numbers) {
    "use strict";
    let answer = 0;
    if(numbers.length === 0) {
        return 0;
    } else { 
        for(let i = 0; i < numbers.length; i++) {
            answer += numbers[i];
        }
    }
    return answer;
};


console.log(sum([1, 5.2, 4, 0, -1]))