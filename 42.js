function abbrevName(name){
    let answer = name.split(" ");
    answer = answer[0][0] + "." + answer[1][0];
    return answer.toUpperCase();
}


