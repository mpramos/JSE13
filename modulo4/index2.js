//!FOR
//? 0,10,20,30,40,50,60,70,80.,90
// console.log(0);
// console.log(10);
// console.log(20);
// console.log(30);
// console.log(40);
// console.log(50);
// console.log(60);
// console.log(70);
// console.log(80);
// console.log(90);

// let numero=0
// console.log(numero);
// console.log(numero+=10); //10
// console.log(numero+=10); //20
// console.log(numero+=10); 
// console.log(numero+=10);
// console.log(numero+=10);
// console.log(numero+=10);
// console.log(numero+=10);
// console.log(numero+=10);
// console.log(numero+=10);

let numero=0
while (numero<91) {
    console.log(numero); //90
    numero+=10 //100
}
let numeroDo=7
do {
    numeroDo++
    console.log(numeroDo);
} while (numeroDo<6);
 
for ( let i=0 ; i<=90 ; i+=10){
    console.log(i);
}
for ( let i=90 ; i>=0 ; i-=10){
    console.log(i);
}
for ( let i=0; i<=5 ; i++){
    console.log(i); // 0 1 2 3 4 5
}

console.log(emojis);
let empoji1=emojis[0]
let empoji2=emojis[1]
let empoji3=emojis[2]
let empoji4=emojis[3]
console.log(empoji1);
console.log(empoji2);
console.log(empoji3);
console.log(empoji4);
let tamañoColeccionEmoj=emojis.length-1
console.log(tamañoColeccionEmoj);

let emojis=['😁','😀','😄','😆']

for (let indice = 0; indice <= emojis.length-1 ; indice++) {
    console.log(emojis[indice]); 
}

let emojisHappies=['😁','😀','😄','😆']


let mostrarEmojies=coleccion=>{
    for (const elemento of coleccion) {
        console.log(elemento);
    }
}
mostrarEmojies(emojisHappies)




let values=[10,20,30,40]
let sum=0
for (const value of values) {
    sum+=value //10 30
}
console.log(sum);
let primeraPersonaFoto=persona[0].foto
let primeraPersonaNombre=persona[0].nombre
console.log(primeraPersonaNombre);
let personas=
[
    {foto:'👧', nombre:'Susana'},
    {foto:'👩‍🦱', nombre:'Cesar'},
    {foto:'👩', nombre:'Juana'},
    {foto:'👨‍🦰', nombre:'Alfredo'},
]

for (const persona of personas) {
    console.log(`Persona : ${persona.foto} ${persona.nombre}`)
}

let persona1={
    foto:'👨',
    nombre:'Roberto',
    edad:45,
    ciudad:'La Paz'
}

for (const key in persona1) {
    console.log(`${key} => ${persona1[key]} `);
}

let numbers=[10,30,4,54,6]
console.log(numbers.sort((a,b)=>a-b));
console.log(numbers.sort((a,b)=>b-a));
let nombres=['brenda','sebastian','cesar','adela']
console.log(nombres.sort());






















