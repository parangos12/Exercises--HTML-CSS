var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(5, 25);
document.addEventListener("keydown", moverVaca);

var x = aleatorio(0, 6);
var y = aleatorio(0, 6);
var x = x * 80;
var y = y * 80;

teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo =
{
    url: "tile.png",
    cargaOk: false,
}

var vaca = {
    url: "vaca.png",
    cargaOk: false,
}

fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo); 

vaca.imagen = new Image(); 
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargaOk == true)
    {
        papel.drawImage(fondo.imagen, 0, 0); 
    }
}

function moverVaca(evento)
{

    if (fondo.cargaOk == true)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOk == true)
    {
        paso = 5
        switch (evento.keyCode)
        {
            case teclas.UP:
                papel.drawImage(vaca.imagen, x, y-paso);
                y = y - paso;
                break;
            case teclas.DOWN:
                papel.drawImage(vaca.imagen, x, y+paso);
                y = y + paso;
                break;
            case teclas.RIGHT:
                papel.drawImage(vaca.imagen, x + paso, y);
                x = x + paso;
                break;
            case teclas.LEFT:
                papel.drawImage(vaca.imagen, x - paso, y);
                x = x - paso;
                break;              
        }
    }
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado
} 

