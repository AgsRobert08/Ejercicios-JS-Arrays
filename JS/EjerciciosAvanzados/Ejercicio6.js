//COMBINAR VARIOS ARREGLOS Y ORDENAR DE MENOR A MAYOR
let arreglo1 = [3, 1, 4];
let arreglo2 = [10, 2, 7];
let arreglo3 = [5, 8, 6];

function combinarOrdenar(arreglo1,arreglo2,arreglo3){
    let combinado=arreglo1.concat(arreglo2,arreglo3);
    
    let ordenar=combinado.sort((a, b) => a - b);
    console.log(ordenar);
    }

combinarOrdenar(arreglo1,arreglo2,arreglo3);