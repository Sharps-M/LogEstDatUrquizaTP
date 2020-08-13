let n = Number(prompt('Cantidad de Alumnos a evaluar promedio:'));
let calif = [];
let i;
for (i = 0; i < n; i++) {
    calif.push(parseInt(prompt("Ingrese Calificacion Alumno: " + (i + 1))));
}
const califTotal = calif.reduce((acumulador, valorActual) => acumulador + valorActual);
let promedio = califTotal/n;

let acc = 0;
for (const elemento of calif) {
    if (elemento > promedio)
        acc++
};

document.write("Calificaciones en el array: " + calif);

document.write('<br>' +'Elementos en el array: '+ n);

document.write('<br>' +"Sumatoria del Array: " + califTotal);

document.write('<br>' +"Promedio del Array: " + promedio);

document.write('<br>' +"Alumnos que Superaron el Promedio: " + acc);