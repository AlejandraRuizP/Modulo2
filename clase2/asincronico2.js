//Numero par o impar
let numero= prompt("Indique un numero")

if(numero % 2 == 0 ){
    document.write("El numero " +numero+ " es par <br>");
} else{
    document.write("El numero " +numero+ " es impar <br>");

}

//Edad jubilación
let generoPersona= prompt("Indique su genero: M-(masculino) ó F-(femenino) ");
let edad= prompt("Indique su edad actual");

if(generoPersona=="m" && edad>= 65 || generoPersona=="f" && edad>= 60 ){
    document.write("Su genero es " +generoPersona+ " y con "+ edad+ " años ya está en edad de jubilarse <br>");
}else{
    document.write("Su genero es " +generoPersona+ " y con "+ edad+ " aún no está en edad de jubilarse <br>");
}

