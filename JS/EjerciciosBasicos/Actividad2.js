//Encontrar el mayor numero

let numeros = [23,34,54,1,23,100];
let numeroMayor = numeros[0]; // Asumimos que el primer elemento es el mayor inicialmente

numeros.forEach(function(numero) {
  if (numero > numeroMayor) {
    numeroMayor = numero;
  }
});

console.log(numeroMayor);
