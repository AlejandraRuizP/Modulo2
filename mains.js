let words= [
    
'plataforma5',
'black',
'summer',
'flea',
'aeroplane',
'peppers',

'unlimited',
'arcadium',
'love',
'getaway',
'stadium',
'quixoticelixer',
'quarter',
'snow',
'dylan',
'zephyr',
'funky',
'chili'

]
let newWord=words[Math.floor(Math.random()*words.length)];
console.log(newWord);

let randomWord=document.querySelector("h1");
randomWord.innerText= newWord;


