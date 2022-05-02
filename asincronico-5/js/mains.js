//Sumar iteración de array
//let elemenetos=[];


function sumarArray(array){

    let sumatoria=0;

    for(i=0; i<array.length; i++){
        sumatoria+=array[i];
    
    }
return sumatoria;

}



let arreglo1= [1,2,3];
let arreglo2= [10,3,10,4];
let arreglo3= [-5,100];
console.table(sumarArray(arreglo1));
console.table(sumarArray(arreglo2));
console.table(sumarArray(arreglo3));


