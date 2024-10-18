//Concatenar arreglos, tomar dos arreglos y combinarn en uno solo.
//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

let arreglo1=['Hola','Bienvenido'];
let arreglo2=['Roberto','Agustin'];
let arregloNuevo=[];
function concatenar(){
    arregloNuevo=arreglo1.concat(arreglo2);
    console.log(arregloNuevo);
}

concatenar();