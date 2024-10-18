//FILTRAR NUMEROS PARES USANDO EL METODO FILTER()

let numeros=[1,2,3,4,5];

function numerosPares(numeros){
    let pares=numeros.filter(Element=>Element%2==0);
    console.log(pares);
}
numerosPares(numeros);

function pares(numeros){
    let pares=numeros.filter(numero%2==0);
    console.log(pares);
}