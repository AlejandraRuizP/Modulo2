//constantes----------------------------------------------------------
const words= [
    
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

//variables globales------------------------------------------------------------------------------------------------------------
//variable que almacena la palabra elegida al azar
let palabraR= palabraRandomica();
//variable que almacena el elemento html en el que se escribe la palabra al azar
let randomWord=document.querySelector("h1");
//inner que actualiza la palabra en pantalla
randomWord.innerText= palabraR;
//variable que almacena el texto donde se escribe el tiempo
let tiempoRestante=document.querySelector("#timeSpan")
//tiempo restante
var time = 10
//intervalo
let idInterval = setInterval(actualizarTiempo,1000);
//----------------------keydown
let text=document.querySelector("#text");
//enfoca el input
text.focus();
//funciones------------------------------------------------------------------------------------------------------------------------
function palabraRandomica(){
    let indiceR=Math.floor(Math.random()*words.length);

    let newWord=words[indiceR];

    console.log(newWord);

    return newWord;

}
function actualizarTiempo(){
    time--;
    tiempoRestante.innerText= time + "s";
    if(time==0){
        tiempoRestante.innerText="Game Over";
        clearInterval(idInterval);

    }

}

    //------score
    let score=document.querySelector("#score");
    let puntos=0;
    //score.innerHTML=puntos;

    function updateEscore(){
        puntos++
        score.innerText= puntos;
    }
    
//eventos---------------------------------------------
text.addEventListener("keyup", function(e){
        
    //if(e.key=="Enter"){
        if (text.value==palabraR){
            palabraR=palabraRandomica();
            randomWord.innerText= palabraR;
            updateEscore();
            text.value= "";

            
        /* }else{
            text.value= "";*/
        } 
    //}
})
//código general-------------------------------------------------------------------
