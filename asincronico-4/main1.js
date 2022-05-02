let a= prompt("Indique una palabra");
let b= prompt("Indique otra palabra");
let c= document.write(venganza(a,b));

function venganza (a, b){ 

    let inicializador=1;

    let final= parseInt(prompt("Indique hasta que numero quiere contar"));

    while(inicializador<final){

        if (inicializador%3 == 0){
    
            document.write("Brocoli,");
    
        }else if (inicializador%5 == 0){
    
            document.write("Remolacha,");
    
        }else if(inicializador%3 ==0 && inicializador%5== 0){
    
            document.write("Ensalada,");
        }else{
            document.write(inicializador+",");
        }
    
        inicializador++;
    }

    return inicializador;

}