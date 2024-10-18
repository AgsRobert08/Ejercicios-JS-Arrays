//PRODUCTO  DE TODOS LOS ELEMENTOS
const numeros = [1, 2, 3, 4, 5];

const productoTotal = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);

console.log(productoTotal);
