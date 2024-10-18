//PALABRAS MAS LARGAS QUE "N" LETRAS
let arreglo=['Roberto','Agustin','Zavaleta'];
let numero=7;
    //enviamos los dos parametros a la funcion 
function palabraLarga(arreglo,numero){
    let resultado=arreglo.filter(palabra => palabra.length >numero); 
    console.log(resultado);
}

palabraLarga(arreglo,numero);