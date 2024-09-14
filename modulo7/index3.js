function suma(a,b) {
    return  a+b
}
function resta(a,b) {
    return  a-b
}
function calculadora(callback,a,b) {
    return callback(a,b)
}
console.log(calculadora(suma,4,3));
console.log(calculadora(resta,4,3));

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
let emojis=['😁','😎','😄']
emojis.forEach((element,index) => {console.log(`${index} ${element} `)});
let nombres=['juana','juan','pedro','susana']
nombres.forEach((element,index)=>{console.log(`${index} ${element.toUpperCase()}`)});
//! map
// let numerosDos=[]
// for (let index = 0; index < numeros.length; index++) {
    //     numerosDos.push(numeros[index]*numeros[index])
// }
// console.log(numerosDos);
let numeros=[1,2,3,4,5] //[1,4,9,16,25]
let numerosDos=numeros.map(numero=>numero*numero)
let numerosSumaDos=numerosDos.map(numero=>numero+2)
console.log(numerosSumaDos);
console.log(numeros);
let nombresMap=['juana','juan','pedro','susana']
let nombresMayuscula=nombresMap.map(nombre=>nombre.toUpperCase().slice(-1))
console.log(nombresMayuscula);

//!Filter
let numerosFilter=[1,2,3,4,5]// [2,4]
let pares=numerosFilter.filter(numero=>numero%2==0)
let impares=numerosFilter.filter(numero=>numero%2==1)
console.log(pares);
console.log(impares);
console.log(numerosFilter);


















  

