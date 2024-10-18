//retarnar el promedio de un arreglo

let calificacion =[9,10,8,9,10];

function CalcularPromedio(calificacion){
    let promedio=0;
    let suma=0;
    calificacion.forEach(elemento =>{
        suma=suma+elemento
        promedio=suma/calificacion.length
    });
    return promedio;
}
console.log('Promedio =',CalcularPromedio(calificacion));

