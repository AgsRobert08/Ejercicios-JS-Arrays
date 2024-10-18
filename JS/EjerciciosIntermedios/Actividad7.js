//--TODOS LOS NUMEROS SON MAYORES QUE N

let numeros=[2,56,12,34,6];
let numero=1;

function numerosMayores(numeros,numero){
    let numMayor=numeros.every(num => numero > num);
    console.log(numMayor);
}
numerosMayores(numeros,numero);