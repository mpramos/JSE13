function suma(a, b) {
    return a + b
}
function resta(a, b) {
    return a - b
}
function calculadora(callback, a, b) {
    return callback(a, b)
}
console.log(calculadora(suma, 4, 3));
console.log(calculadora(resta, 4, 3));

function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

console.log('Hola a todos 1');
console.log('Hola a todos 2');
console.log('Hola a todos 3');
setTimeout(() => {
    console.log('Hola a todos 4');
}, 2000);
console.log('Hola a todos 5');
//!FOR EACH
let emojis = ['😁', '😎', '😄']
emojis.forEach((element, index) => { console.log(`${index} ${element} `) });
let nombres = ['juana', 'juan', 'pedro', 'susana']
nombres.forEach((element, index) => { console.log(`${index} ${element.toUpperCase()}`) });
//! map
// let numerosDos=[]
// for (let index = 0; index < numeros.length; index++) {
//     numerosDos.push(numeros[index]*numeros[index])
// }
// console.log(numerosDos);
let numeros = [1, 2, 3, 4, 5] //[1,4,9,16,25]
let numerosDos = numeros.map(numero => numero * numero)
let numerosSumaDos = numerosDos.map(numero => numero + 2)
console.log(numerosSumaDos);
console.log(numeros);
let nombresMap = ['juana', 'juan', 'pedro', 'susana']
let nombresMayuscula = nombresMap.map(nombre => nombre.toUpperCase().slice(-1))
console.log(nombresMayuscula);

//!Filter
let numerosFilter = [1, 2, 3, 4, 5]// [2,4]
let pares = numerosFilter.filter(numero => numero % 2 == 0)
let impares = numerosFilter.filter(numero => numero % 2 == 1)
console.log(pares);
console.log(impares);
console.log(numerosFilter);
let nombresContienenA = nombresFilter.filter(nombre => nombre.includes('a'))
let nombresFilter = ['juana', 'juan', 'pedro', 'susana'] //['juana','juan','susana']

let puntuaciones = [
    { nombre: 'Susana', nota: 95 },
    { nombre: 'Adrián', nota: 98 },
    { nombre: 'Lorenzo', nota: 80 },
    { nombre: 'Alfredo', nota: 50 },
    { nombre: 'Adela', nota: 85 },
    { nombre: 'Javie', nota: 100 }
]

let puntuacionesMayoresOchenta = puntuaciones.filter(puntuacion => puntuacion.nota > 80)
console.log(puntuacionesMayoresOchenta);
let puntuacionPorDos = puntuaciones.map(puntuacion => puntuacion.nota * 2)
console.log(puntuacionPorDos);

//!REDUCE
// Array.reduce((acumulador,actual)=>{return },0)
let sum = 0
const numbers = [1, 2, 3, 4, 5]
const sumaDeNumbers = numbers.reduce((sum, number) => sum + number, 0)
console.log(suma);
//! EVERY
const names = ['Juana', 'Esteban', 'Amalia', 'Cecilia']
const todosSonStrings = names.every(name => typeof name === 'string') //true    
console.log(todosSonStrings);

//!FIND
const edades = [24, 22, 25, 32, 35, 18]
const edad = edades.find(edad => edad < 20)
console.log(edad);

const puntuacionesP = [
    { nombre: 'Susana', nota: 95 },
    { nombre: 'Adrián', nota: 98 },
    { nombre: 'Lorenzo', nota: 80 },
    { nombre: 'Alfredo', nota: 50 },
    { nombre: 'Adela', nota: 85 },
    { nombre: 'Javie', nota: 100 }
]
const notaAlta=puntuacionesP.find(puntuacion=>puntuacion.nota>80)
console.log(notaAlta.nota);

//!FINDINDEX
const namesF = ['Juana', 'Esteban', 'Amalia', 'Cecilia']
const edadesF = [24, 22, 25, 32, 35, 18]

const resultado=namesF.findIndex(name=>name.length>5)
console.log(resultado);

const edadF=edadesF.findIndex(edad=>edad<20)
console.log(edadF);
//!SOME
const productos=['Leche','Cafe','Azucar','Miel','Manzana']
console.log(productos.sort());
const numerosDescendentes= numerosS.sort((a,b)=>b-a)
console.log(numerosDescendentes);
const numerosS=[90,50,34,21,10,100,200,5,9]
const numerosAscendentes= numerosS.sort((a,b)=>a-b)
console.log(numerosAscendentes);

const users=[
    {nombre:'Juana',edad:50},
    {nombre:'Juan',edad:50},
    {nombre:'Esteban',edad:100},
    {nombre:'Flor',edad:22},
]

users.sort((a,b)=>{
    if (a.edad <b.edad) return -1 
    if (a.edad>b.edad) return 1 
    return 0
})
console.log(users);
