function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    let numeros=[1,2,3,4,5]
    let numerosPorDos=[]
    for (let index = 0; index < numeros.length; index++) {
            numerosPorDos.push(numeros[index]*2)
    }
    return numerosPorDos
}

console.log("Antes de llamar a outer()");
// debugger
console.log(outer());
console.log("Despues de llamar a outer()");


