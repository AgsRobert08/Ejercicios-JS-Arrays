//CONTAR OCURRENCUAS DE UN VALOR

const valores = [1, 2, 3, 4, 2, 3, 2, 5];
const valorBuscado = 2;

const contador = valores.reduce((acumulador, valorActual) => {
if (valorActual === valorBuscado) {
    return acumulador + 1;
} else {
    return acumulador;
}

}, 0);

console.log(contador); 

