var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
/* var mapa = "tile.png";  /* "Ruta donde se cara el mapa"*/
var cantidad = aleatorio(5, 25);
var fondo = {
    url: "tile.png", 
    cargaOk: false,
}

var vaca = {
    url: "vaca.png", /* direccion donde estan las cosas URL */
    cargaOk: false,
}

fondo.imagen= new Image(); /* crear nuevos objetos, mayus definicon completa de un objeto es una clase, clase image, estamnos creando una nueva definicon de objeto(o una instancia de la clase) en una variable llamada imagen*/
fondo.imagen.src = fondo.url;/*  para poder cargar nuestra fuente de la imagen */
fondo.imagen.addEventListener("load", cargarFondo);  /* que ya esta lista la carga */

vaca.imagen = new Image();  /* era similar a crear la variable anterior */
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargaOk == true) {
        papel.drawImage(fondo.imagen, 0, 0);  /* porque drawImage ESPERA UNA IMAGEN, y como ahora es un objeto literal, es decir mas variables dentro */
    }

    if (vaca.cargaOk == true)
    {

        for (v = 0; v < cantidad;v++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x * 80;
            var y = y * 80;
            
            papel.drawImage(vaca.imagen, x, y);
        }

    }

}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado
}


/* for (var i = 0; i < 10; i++) {
    z = aleatorio(-5, 20);
    document.write(z + " ,");
} */