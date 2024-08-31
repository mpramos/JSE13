//! OPERADOR DE LA CADENA,STRING,TEXTO (concatenación)
let nombreCompleto='Juana'
nombreCompleto+=' '
nombreCompleto+='Andrea'
nombreCompleto+=true
console.log(nombreCompleto);
console.log(typeof nombreCompleto);
let num1='1'
let num2=2
console.log(num1+num2);
console.log(typeof num1+num2);
//

console.log("e">"b");
console.log("b">"B");
//? ABCDEFGH---- abcde-----

let comidas=['🍕','🍔','🍞']
console.log(comidas);
let pizza=comidas[0]
let num=3
console.log(pizza);
console.log(comidas instanceof Array);
console.log(pizza instanceof Array);
console.log(num instanceof Array);



let usuario={
    nombre:'Carlos',
    edad:38
}
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.edad);
delete usuario.edad
console.log(usuario);

console.log('hshdhd' ? '🍔':'🍎');
console.log(false? '🍔':'🍎');


let a, b
b=(a=(20+20)*2) > 3**2
console.log(a);
console.log(b);














