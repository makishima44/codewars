function doubleChar(str) {
   return str.split("").map(letter => { return letter + letter}).join("");  
}
