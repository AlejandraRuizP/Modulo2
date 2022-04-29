//Piedra paple o tijera
//Tijera cotra a papel
//Papel envuelve piedra
//Piedra rompe la tijera

//

let continuar= "si"
let maquina;

while(continuar == "si"){

    let opcion= parseInt(prompt("Ingrese una opción 1)Piedra 2)Papel 3)Tijera"));

    maquina= parseInt(Math.floor(Math.random()*3+1));


 if(maquina==3 && opcion==2 || maquina==2 && opcion==1 || maquina==1 && opcion==3){

    alert("Ouch! Perdiste la opción ganadora fué "+maquina);

 }else if(maquina==2 && opcion==3 || maquina==1 && opcion==2 || maquina==3 && opcion==1){

    alert("Ganaste! la opción de la maquina fué "+maquina );

 }else if(maquina==opcion){

    alert("Empate! la opción de la maquina fué "+ maquina);
    
 }

    continuar=prompt("Desea volver a jugar?");
}

