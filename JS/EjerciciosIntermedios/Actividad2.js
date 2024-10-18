//ORDENAR NUMEROS DE MENOR A MAYOR
//https://nelkodev.com/javascript/ordenacion-de-arrays-en-javascript-aprende-como-hacerlo-paso-a-paso/#:~:text=Si%20queremos%20ordenar%20un%20array%20en%20forma%20descendente%2C,segundo%2C%20o%20cero%20si%20ambos%20par%C3%A1metros%20son%20iguales.

let numeros=[2,5,9,34,12,7];
numeros.sort((a, b) => a - b);
console.log(numeros);

// si queremos ordenarlo de manera ascendete solo aplicamos 
//el metodo sort() a nuestro array

function ordenarNumeros(numeros){
    let ordenado=numeros.sort((a,b)=>a-b);
    return ordenado;
}
ordenarNumeros(numeros);