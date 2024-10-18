//AGRUOAR POR EDADES
const personas = [
    { nombre: "Robert", edad: 20 },
    { nombre: "Karla", edad: 23 },
    { nombre: "Fernando", edad: 16 },
    { nombre: "Esther", edad: 31 },
    { nombre: "Vicente", edad: 35 }
];

const gruposPorDecada = personas.reduce((acumulador, persona) => {
    const decada = Math.floor(persona.edad / 10) * 10; // Calcular la década con el Math.floor
    if (!acumulador[decada]) {
        acumulador[decada] = [];
    }
    acumulador[decada].push(persona);
    return acumulador;
}, {});

console.log(gruposPorDecada);
