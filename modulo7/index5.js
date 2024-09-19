//!DESESTRUCTURACIÓN
//? Arreglos 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [numOne, numeTwo, numThree, ...rest] = numbers
console.log(numOne, numeTwo, numThree);
console.log(rest);
let [numFour, numFive, ...resi] = rest
console.log(numFour, numFive, resi);

const names = [undefined, 'cecilia', 'alberto', 'juan']
const [
    firstPerson = 'Ana',
    secondPerson,
    thirPerson,
    FourthPerson,
    FivePerson = 'Juana'
] = names
console.log(firstPerson, secondPerson, thirPerson, FourthPerson, FivePerson);

const fullstack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of fullstack) {
    console.log(first, second, third);

}
const [frontend, backend] = fullstack
console.log(frontend);
console.log(backend);

const countries = [['Argentina', 'Buenos Aires'], ['Colombia', 'Bogotá'], ['Bolivia', 'Sucre']]
// let [pais1,pais2,pais3,pais4,...restit]=countries
// console.log(pais1,pais2,pais3);
for (const [pais, ciudad] of countries) {
    console.log(pais, ciudad);
}
//? Objetos
let { ancho: w, alto: h, area: a, perimetro: p = 50 } = rectangulo

const calcularPerimetro = (rectangulo) => {
    return 2 * (rectangulo.ancho + rectangulo.alto)
}
const rectangulo = {
    ancho: 20,
    alto: 10,
    area: 200
}
const calcularPerimetroD = ({ ancho, alto }) => {
    return 2 * (ancho + alto)
}
console.log(calcularPerimetroD(rectangulo))

const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]
for (const {task:t,time:tm,completed:c}  of todoList) {
    console.log(t,tm,c);
}
