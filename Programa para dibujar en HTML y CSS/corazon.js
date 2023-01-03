var d = document.getElementById("corazon");
var lienzo = d.getContext("2d");


function dibujar(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}
/* lineas */
dibujar("red", 20, 0, 50, 0)
dibujar("red", 50, 0, 70, 20)
dibujar("red", 70, 20, 90, 0)
dibujar("red", 90, 0, 120, 0)
dibujar("red", 120, 0, 140, 20)
dibujar("red", 140, 20, 140, 50)
dibujar("red", 140, 50, 70, 120)
dibujar("red", 70, 120, 0, 50)
dibujar("red", 0, 50, 0, 20)
dibujar("red", 0, 20, 20, 0)

function rellenar(color, relleno, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.fillStyle = relleno;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.lineTo(x3, y3);
    lienzo.lineTo(x4, y4);
    lienzo.lineTo(x5, y5);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}

rellenar("red","blak",30,40,50,60,70,80,90,50,40,59)


