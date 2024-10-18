//TRANSFORMA UN ARREGLO DE OBJETOS

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 35 }
];

const nombres = personas.map(persona => persona.nombre);

console.log(nombres);
