class Billete
{
    constructor(v,c)
    {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagenes[this.valor];
    }
    mostrar(x)
    {
        for (var i in x)
        {
            
        }
        
    }
}
var imagenes = [];
imagenes[10000] = "10000.JPG";
imagenes[20000] = "20000.JPG";
imagenes[50000] = "50000.JPG";

var caja = [];
var entregado = [];  /* variable array */
caja.push(new Billete(10000, 10)); /* agg nuevos objetos a nuestro array */
caja.push(new Billete(50000, 10));
caja.push(new Billete(20000, 5));

var dinero=0;
var div = 0;
var papeles = 0;
var bill;
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var resultado = document.getElementById("resultado")

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            }
            else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    console.log(entregado)
    }
    if (dinero > 0)
    {  
        resultado.innerHTML="Soy un cajero pobre y no tengo dinero, no puedo dar esa cantidad:("
    }
    else
    {
        for (var e of entregado)
        {
            var x = e.cantidad;
            if (x>0)
            {
                while(x>0)
                {
                    e.mostrar()
                    resultado.innerHTML = resultado.innerHTML + "Helloooo" + "</br>"
                    x = x - 1
                }
            }
        }
    }
}


