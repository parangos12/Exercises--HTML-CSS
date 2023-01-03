var d = document.getElementById("dibujo"); /* metodo del documento que trae un elemento atraves de su Id */
var lienzo = d.getContext("2d");  /* metodo del cambas==area de dibujo */

lienzo.beginPath();   /* función--iniciar un dibujo=poner el lapiz en la hoja */
lienzo.strokeStyle = "yellow"; /* color linea */
lienzo.moveTo(0, 0); /* metodo o función para mover el lapiz */
lienzo.lineTo(0, 200); /* función de dibujar la linea */
lienzo.stroke(); /* dibujar */
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.lineTo(200, 0);
lienzo.stroke();
lienzo.moveTo(0, 0);
lienzo.lineTo(200, 0);
lienzo.stroke();
lienzo.closePath(); /* función--quitar el lapiz en la hoja */