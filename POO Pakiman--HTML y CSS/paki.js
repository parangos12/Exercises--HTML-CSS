var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

/* O LO QUE ES LO MISMO */
/* coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro); */

for (var pakin of coleccion)
{
    pakin.mostrar();
}

console.log(coleccion);
console.log(cauchin, pokacho, tocinauro);

for (var x in coleccion[0])
{
    console.log(x)
}

for (var x in imagenes)
{
    console.log(x)
}
/* ESTE NO MUESTRA NADA PORQUE NO EXISTE UN INDICE REAL  */

for (var x of imagenes)
{
    console.log(x)
}
