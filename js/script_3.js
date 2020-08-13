// Ingresar 20 números enteros y ordenarlos decrecientemente.
let n = Number(prompt('Ingrese cantidad de numeros a ordenar decrecientemente:'));
let numeros = [];
let i;
for (i = 0; i < n; i++) {
    numeros.push(parseInt(prompt("Ingrese Numero: " + (i + 1))));
};
/*
const ordenados = numeros.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
*/


const sortedNumber = [...numeros].sort((a, b) => b - a);

var cant = numeros.length;
var orden = numeros.sort((a, b) => a - b);
var ordenDec = numeros.sort((a, b) => a - b).reverse();

document.write('<br>' + "Elementos en el array: " + cant);
//document.write('<br>' + "Elementos ordenados: "+ orden);
document.write('<br>' + "Elementos decreciente: "+ sortedNumber);
//document.write('<br>' + "Elementos decreciente: "+ ordenados);
