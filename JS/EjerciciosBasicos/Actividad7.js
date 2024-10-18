//ELIMINAR DUPLICADOS
//Usamos el metodo 'array.filter' el cual retorna un nuevo arreglo
//con los elementos que cumplan la condicion implementada 
//por la funcion como argumento

let numeros=[1,2,3,3,4,67,12,67];

let NuevoArray=numeros.filter((Element,index)=>{
    return numeros.indexOf(Element)===index;
})

console.log(NuevoArray);


//De igual manera hay mas formas, como el metodo 'set'
//al utilizarlo en removers duplicados solo creamos un nuevo set
// se basara en el arreglo original utilizando 'new set'

function DuplicadoConSet(){
    let NuevoArreglo=new Set(numeros);
    let resultado=[...NuevoArreglo];
    console.log(resultado);
}

DuplicadoConSet();