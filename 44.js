function findNeedle(haystack) {
    let answer = "found the needle at position "
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === "needle") {
            answer += i;
        }
    }
    return answer;
}


var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

console.log(findNeedle(haystack_1))

