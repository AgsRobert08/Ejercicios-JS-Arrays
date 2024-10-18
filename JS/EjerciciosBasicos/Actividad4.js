
//Invertir un arreglo sin usar reverse

let nombreCompleto = ['Roberto', 'Agustin', 'Zavaleta'];
let nombreInvertido = [];
function InvertirArreglo() {
    for (let i = nombreCompleto.length - 1; i >= 0; i--) {
        nombreInvertido.push(nombreCompleto[i]);
        
    }
    console.log(nombreInvertido);
}

InvertirArreglo();