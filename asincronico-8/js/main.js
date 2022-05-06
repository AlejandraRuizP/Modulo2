let text=document.querySelector("#text");

let body=document.querySelector("body");



let colors= {"rojo": "red", "azul": "blue", "amarillo": "yellow", "verde": "green"};



text.addEventListener("keydown", function(info){
    
    if(info.key=="Enter"){
        if(text.value== "rojo"){
            document.body.style.backgroundColor="red";

        }else if(text.value== "azul"){
            document.body.style.backgroundColor="blue";

        }else if(text.value== "amarillo"){
            document.body.style.backgroundColor="yellow";

        } if(text.value== "verde"){
            document.body.style.backgroundColor="green";

        }else if( info.key== "Backspace"){
            document.body.style.backgroundColor="white";
           
        }
    }
        
    
})

