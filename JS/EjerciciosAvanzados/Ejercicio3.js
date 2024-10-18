//PLANA UN ARREGLO ANIDADO
//Dado un arreglo que contiene arreglos anidados, usa flat() para aplanarlo en un solo
//nivel.

let arregloAnidado=['hola',['Robert','Agustin']];
console.log(arregloAnidado.flat());

//en el metodo flat() usamos un indice de profundidad para concatenarlos
//para ello lo colocamos de acuerdo a lo que vemos que necesitamos, si es 1 lo podemos dejar vacio

let nombre=['Robert','Karla',['Fernando','JOselyn'],['Vicente',['Esther']]];
function nuevoArreglo(nombre){
    let concatenar=nombre.flat(2);
    console.log(concatenar);
}

nuevoArreglo(nombre);
