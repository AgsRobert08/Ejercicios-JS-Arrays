//ELIMINAR falsy VALUES
let arreglo = [0, 1, false, 2, '', 3, null, 4, undefined, 5];

function eliminarValoresFalsy(arreglo) {
    return arreglo.filter(Boolean);
}

let arregloFiltrado = eliminarValoresFalsy(arreglo);
console.log(arregloFiltrado); 
