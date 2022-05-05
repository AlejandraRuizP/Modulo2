let titulo=document.querySelector("#titulo");

titulo.textContent="Nuevo titulo ";
titulo.innerHTML="<p>Nuevo parrafo en el titulo</p>";


let nuevoParrafo=document.createElement("p");
nuevoParrafo.innerText="lorem lorem lorem";
document.body.appendChild(nuevoParrafo);


let div1= document.querySelector("#div1");

div1.classList= "square";

setInterval(function(){

    if (div1.classList=="square"){

        div1.classList="square2";
        console.log("cambia color");

    }else{

        div1.classList="square"
        console.log("retorna square")
    }
}, 1000); 
  


/* setInterval( function(){
    console.log("cambio color");
    
    div1.classList.toggle(div1.classList="square" ?  div1.classList="square2" :  div1.classList="square" );
    
}, 1000); */




