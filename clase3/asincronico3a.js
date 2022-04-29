//Imprima en consola los numero del 1 al 100
// teniendo en cuenta
// multiplos de 3= Fizz; 
// multiplos de 5= Buzz;
// M. 3 y 5= FizzBuzz;

let contador=0;


while(contador<100){
    if(contador% 3 == 0){
        console.log("Fizz");
    }else if( contador% 5 == 0){
        console.log("Buzz");
    } else if (contador% 3 == 0 && contador% 5 == 0){
        console.log(FizzBuzz)
    }else{
        console.log(contador);

    }
    contador++;
}
console.log("Fin");