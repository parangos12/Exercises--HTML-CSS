var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorCLick);  /* esto es un evento, no es ejecutarla inmediantamente, por eso no lleva parentesis porque no se ejecuta inmediatamente */

var d = document.getElementById("dibujo"); /* metodo del documento que trae un elemento atraves de su Id */
var ancho = d.width;
var lienzo = d.getContext("2d");  /* metodo del cambas==area de dibujo, se queda aca y no dentro de las funciones porque las variables dentro de las funciones solo son para ellas, ahi muerem este concepto se llama AMBITO. */


/* do {
    document.write("Pedro eres el mejor" + x+"<br/>");
    x = x + 1;
} while (x <= 10); */

/* CICLO WHILE
 */
/* while (l < lineas)
{
    yi = 10 *l;
    xf = 10 * (1 + l);
    dibujarlinea("#AAF", 0, yi, xf, 300);
    console.log("linea" + l);
    l = l + 1;
} */

/* CICLO FOR
 */


function dibujarlinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();   
    lienzo.strokeStyle =color; 
    lienzo.moveTo(xinicial, yinicial); 
    lienzo.lineTo(xfinal, yfinal); 
    lienzo.stroke(); 
    lienzo.closePath(); 
}
/* CICLOS PARAN CON UN lIMITE
 */

function dibujoPorCLick()
{
    var xxx = parseInt(texto.value);
    var lineas = xxx;
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l = l + 1)
    {
        xi = espacio * l;
        yf = espacio * (1 + l);
        dibujarlinea("#AAF", xi, 0, 300, yf);
        console.log("linea" + l);
    }
    for (l = 0; l < lineas; l = l + 1)
    {
        yi = espacio * l;
        xf = espacio * (1 + l);
        dibujarlinea("#AAF", 0, yi, xf, 300);
        console.log("linea" + l);
    }

    dibujarlinea(colorcito, 1, 1, 1, 300);
    dibujarlinea(colorcito, 1, 299, 299, 299);
}





/* console.log--sirve para saber que información contiene los objetos por dentro, como esta constitiutido por dentro. */