document.addEventListener("mousedown", coordenates); 
document.addEventListener("mousemove", drawMouse);
document.addEventListener("mouseup", levantar);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

papel.strokeRect(0, 0, cuadrito.width, cuadrito.height);

rect = cuadrito.getBoundingClientRect();

var xi = 0;
var yi = 0;
var click = false

function coordenates(evento)
{
    xi = evento.clientX - rect.left;
    yi = evento.clientY - rect.top;
    click=true
}

function drawMouse(evento)
{
    if (click == true)
    {
        var xf = evento.clientX-rect.left;
        var yf = evento.clientY-rect.top;
        var colorcito = "green";

        dibujarlinea(colorcito, xi, yi, xf, yf, papel);
        xi = xf;
        yi = yf;      
    }
}

function levantar()
{
    click=false
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

