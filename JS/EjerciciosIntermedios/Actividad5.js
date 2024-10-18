//BUSCA EL INDICE DE UN ELEMENTO

function IndiceElemento(arreglo,valor){
    return arreglo.indexOf(valor);
}

let arreglo=['Hola','Programador','Bienvenido',8,2,];
let indice=IndiceElemento(arreglo,8);
console.log(indice);