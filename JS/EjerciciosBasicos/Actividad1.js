//Suma de los elementos de un arreglos
const arreglo=[1,5,4,10];
//hacemos uso de la funcion reduce() el cual efectua una
//accion acumulativa en un arreglo devolviendo como resultado un solo valor
const sumarNumeros=arreglo.reduce((a,b)=>{
    return a+b;
},0)
console.log(arreglo);
console.log(sumarNumeros);



