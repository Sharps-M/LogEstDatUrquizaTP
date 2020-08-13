/*
Se ingresan 30 números enteros. ordenarlos en forma creciente. 
ingresar un valor N y decir si se encuentra en el array 
(en caso afirmativo, indicar la posición).
*/
var array = [];
for (var i=0, j=40; i<j; i++) {
    array.push(Math.round(Math.random() * j))
}
const sortedArray = [...array].sort((a, b) => a - b)
document.write("Array Resultante: " + "<br>" + sortedArray + " ");

let num = parseInt(prompt("Por favor Ingrese un numero: "));
var coin = sortedArray.indexOf(num);

if  (coin >= 0) {
    document.write("<br>" + ' El Numero Ingresado '+ num +' se encuentra en la posicion: ' +coin + "<br>");
} else {
    document.write("<br>" + 'El numero Ingresado no se encuentra en el array');
}
