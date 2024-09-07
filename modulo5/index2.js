function sumar(numero1,numero2) {
    return numero1+numero2
}
function restar(numero1,numero2) {
    return numero1-numero2
}
function dividir(numero1,numero2) {
    return numero1/numero2
}
function resto(numero1,numero2) {
    return numero1%numero2
}
function calculadora(funOperacion,numero1,numero2) {
    return funOperacion(numero1,numero2)
}
console.log(calculadora((restar),5,4));
console.log(calculadora(sumar,55,66));
console.log(calculadora(dividir,10,2));


setTimeout(() => {
    console.log('hola soy un time out');
    
}, 5000);
let suma= (a,b)=>a+b
let resta= (a,b)=> a-b

let validarSuma=(a,b)=>{
    if (!(typeof a ==='number' || typeof b==='number')) {
        return 'parametros invalidos'
    } 
    return a +b
}

console.log(validarSuma('4df',5));

console.log(suma(3,4));
console.log(resta(5,4));

