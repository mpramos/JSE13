"use strict"
nombre="juana"
nombre="rosario"
console.log(nombre)

console.log('text'.length);


try {
    console.log(pedro);
} catch (error) {
    console.log(error.message);
}

let comidas= Array(7)
console.log(comidas);
for (let index = 0; index <= comidas.length-1; index++) {
    comidas[index]='🍕'
}
console.log(comidas);

try {
    let a = b;
} catch (error) {
    console.log(error); // -> ReferenceError: b is not defined
}
console.log("Hemos manejado la excepción"); // -> Hemos manejado la excepción


let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, restablecer a a -2"); // -> Reference error, restablecer a a -2
        a = -2;
    } else {
        console.log("Otro error - " + error);
    }
}
console.log(a); // -> -2

function factorial(n) {
    if (n > 20) {
        throw new RangeError("Valor máximo 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Valor máximo 20







