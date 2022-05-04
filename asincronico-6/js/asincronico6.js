
/*  
 let array=[];


 function arreglo(a,b){
     


     array.push(prompt("Ingrese una palabra"));
     array.push(parseInt(prompt("Ingrese un numero")));

     for(i=1; i<=array[array.length-1]; i++){
    

        console.log(array[0]+ ":"+ i);
    
    }   
    

     return array;


} 

console.log(arreglo());
  */




//-----------------------------------
//retorna []={}, no muestra el valor de la palabra

let palabra= prompt("Ingrese una palabra");
let numero= parseInt(prompt("Ingrese un numero"));



function arregloDeObjetos(p,n){

    let arreglo=[];
    

    for(i=1; i<=numero; i++){
    

        arreglo.push({palabra:i});
    
    } 

 return arreglo;

}

console.log(arregloDeObjetos());

