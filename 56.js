
function disemvowel(str) {   
  const arrayVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let str1 = "";

  for(let i = 0; i < str.length; i++ ) {
        if(arrayVowels.includes(str[i])) {
            str1 += "";
        } else {
            str1 += str[i];
        }
    }   
  return str1;
}

console.log(disemvowel("This website is for losers LOL!"))

