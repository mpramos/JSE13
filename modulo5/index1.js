
function suma(numeroa,numerob) {
    if ( !(typeof numeroa ==='number') || !(typeof numerob ==='number')) {
        return 'No son validos los paramatros'
    } else {
        return (numeroa+numerob);
    }
}
function resta(numeroa,numerob) {
    if ( !(typeof numeroa ==='number') || !(typeof numerob ==='number')) {
        return 'No son validos los paramatros'
    } else {
        return (numeroa-numerob);
    }
}
function multiplicacion() {
    if ( !(typeof numeroa ==='number') || !(typeof numerob ==='number')) {
        return 'No son validos los paramatros'
    } else {
        return (numeroa*numerob);
    }
}
function division() {
    return (numeroa/numerob);
}
function modulo() {
    return (numeroa%numerob);
}
// console.log( suma('hola como estas',4));

console.log( suma(3,5));
console.log( suma(3,'5h'));
console.log( resta(3,'5h'));

// resta(5,4)

function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--; //4
    }
    return result;
}

console.log(factorial(5)); // -> 720

//!recursividad
// n!=n x (n-1) x (n-2) x ... x 2 x 1
// 6!=6 x 5 x 4 x 3 x 2 x 1 = 720

//6! = 6 * 5! = 720
//5! = 5 * 4! =
//4! = 4 * 3!=
//3! = 3 * 2! = 6
//2! = 2 * 1! => 2
//1! = 1
function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(6)); // -> 720


function mostrarMensaje(mensaje) {
    return mensaje    
}
let mens= mostrarMensaje
console.log(mens('hola a todos'));

let mostrarSuma=function add(numero1,numero2) {
    return numero1+numero2
}
console.log(mostrarSuma(3,4));



