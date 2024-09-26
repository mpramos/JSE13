//! Operador de Spread o Rest
//? Cuando desestructuramos un array usamos el operador spread (...)
//? para obtener el resto de los elementos como array. Además de eso, usamos el operador
//? spread para extender los elementos de la matriz a otra matriz.

const nums=[1,2,3,4,5,6,7,8,9,10]
let [num1,num2,num3,...rest]=nums
console.log(num1,num2,num3);
console.log(rest);
const paises=['Bolivia','Argentina','Peru','Colombia']
let [primerPais,segundoPais,...restPais]=paises
console.log(primerPais,segundoPais);
console.log(restPais);

let emojis=['😀','😁','😋']
let copyEmojis=[...emojis]
copyEmojis.push('😎')
console.log(copyEmojis);
console.log(emojis);

const pares=[0,2,4,6,8,10]
const paresNumeros=[...pares]
console.log(paresNumeros);

const impares=[1,3,4,7,9]
const imparesNumeros=[...impares]
console.log(imparesNumeros);


let todosLosNumeros=[...pares,...impares]
console.log(todosLosNumeros);

const frontend=['HTML','CSS','JS','REACT']
const backend=['Node','Express','MongoDB']

const fullstack=[...frontend,...backend]
console.log(fullstack);

const user={
    name:'Carla',
    title:'Programmer',
    country:'Bolivia',
    city:'La Paz'
}

const copyUser={...user}
copyUser.isMarried=true
console.log(copyUser);
console.log(user);

