function greet(language) {
    let answer = "";
    let toungueBase = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso' 
    };
     if(language) {
        if(toungueBase[language]) {
            answer += toungueBase[language]
        } else {
            answer += toungueBase["english"]
        } 
     }
  return answer
}
console.log(greet('dutch'))

