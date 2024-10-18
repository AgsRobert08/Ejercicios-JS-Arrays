//ENCONTRAR UN ELEMENTO ESPECIFICO

function encontrarObjetoConPropiedad(arreglo, propiedad, valor) {
    return arreglo.find(objeto => objeto[propiedad] === valor);
}

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 35 }
];

let resultado = encontrarObjetoConPropiedad(personas, "nombre", "Ana");
console.log(resultado); 
