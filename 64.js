function findShort(s){
    let arr = s.split(" ");
    let answer = arr[0].length;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length < answer) {
            answer = arr[i].length;
        }
    }
    return answer;
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

