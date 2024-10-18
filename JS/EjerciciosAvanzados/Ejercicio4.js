//REMPLAZAR VALORES EN UN ARREGLO
let numeros = [-1, 2, -3, 4, -5];

let numerosRemplazados = numeros.map(numero => Math.abs(numero));

console.log(numerosRemplazados);

//otro ejemplo 
let negativos = [-2,-3,-4,-5,-7,-2];
let positivos=negativos.map(function(numer){
    return Math.abs(numer);
})
console.log(positivos);