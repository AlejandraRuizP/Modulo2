//funcion desdes-hasta

function desdeA_B(a,b){

    while(a<b){
        document.write(a + "<br>");
        a=a+a;
    }
    return a;
}

//console.log(desdeA_B(2,10));

let a= parseInt(prompt("Indique desde donde quiere iniciar el conteo"));
let b= parseInt(prompt("Indique donde finalizará el conteo"));
let c= document.write(desdeA_B(a,b)); 
