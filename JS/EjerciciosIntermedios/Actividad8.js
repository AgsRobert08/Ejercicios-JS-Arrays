//ALGUNOS NUMEROS SON PARES

let numeros=[5,7,11,8,45,68];
function numeroPar(numeros){
    let hayPar=numeros.some(numero => numero % 2 ===0);
    console.log(hayPar);
}

numeroPar(numeros);