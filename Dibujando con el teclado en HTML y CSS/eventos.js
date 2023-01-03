document.addEventListener("keydown", dibujarTeclado)
var cuadrito = document.getElementById("area_de_dibujo")
var papel=cuadrito.getContext("2d")
var x = 100;
var y = 100;

var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

dibujarlinea("red", x-1, y-1, x+1, y+1, papel)

function dibujarTeclado(evento)
{
    var colorcito = "green";
    var movimiento = 1;
    switch (evento.keyCode)
    {
        case teclas.UP:
            dibujarlinea(colorcito, x, y, x, y - movimiento,papel);
            y = y - movimiento;
        break;

        case teclas.DOWN:
            dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        
        case teclas.RIGHT:
            dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        
        case teclas.LEFT:
            dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
  
        default:
            console.log("Otra tecla")
            break;

    }
/* ESTO ES LO MISMO: 
        if(evento.keyCode==teclas.UP)
    {
        console.log("vamos arriba")
    }
 */
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
