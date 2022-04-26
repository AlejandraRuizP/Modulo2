

var edadActual= prompt("¿Cuál es tu edad?");
var calculodias= edadActual*365
document.write("Tú edad es " + edadActual + " y tiene "+ calculodias+ " días viviendo. <br>" );



var edadMaxima= Number(prompt("¿Hasta que edad crees que vivirás?"));
var nombreSnack= prompt("¿Como se llama tu snack favorio?")
var snackXsemana= Number(prompt("¿Qué cantidad de "+ nombreSnack + " consumes por semana? Indicar número de paquetes terminados :P"));
var snackXanho= (snackXsemana*4)*12;
var precioSnack=Number(prompt("¿Cuánto cuesta tu snack favorito?"));

var snackXvida= (edadMaxima-edadActual) * snackXanho;

var cuantoXsnack= precioSnack*snackXvida;
 document.write(" Necesitarás " +  snackXvida+ " " + nombreSnack +" para que te alcance hasta los "+ edadMaxima + "<br>");
 document.write("Necesitarás "+ cuantoXsnack + "CLP para comprarlos. ");





