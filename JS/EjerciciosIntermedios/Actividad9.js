//SUMA ACUMULADA

let numeros = [1, 2, 3, 4, 5];

const sumaAcumulada = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(sumaAcumulada);
