let deseo1='chupon nuevo'
let deseo2='famosos y ricos'
let deseo3='la paz mundial'
let deseo4='Emparedado'

//! Valores falsos numero
// 0 
//! Valores verdaderos numero
// 1 
//! Valores verdaderos texto
// 'juana' 
//! Valores falsos texto
// ''
//! Valores verdaderos booleanos
// true 
//! Valores falsos booleanos
// false

if (true) {
    console.log('soy true');
}else{
    console.log('soy false');
}

if (deseo2=='chupon nuevo')
{
        console.log('chupon nuevo 🍭👶');
}

if(false)
   {console.log('hola soy un valor verdadero')} 
    console.log('hola');
    
console.log('👶');
console.log('😊');
let edad=17
let mensaje='puedes votar'
if(edad>=18){
    console.log(mensaje);
}else{
    console.log('no '+mensaje);
}


let edadUsario=23
let esF=false;
let puntos=703
let valorCarrito=299
let costoEnvio=9.99
// if (edadUsario>21) {
//   ?      if (valorCarrito>=300 || puntos>=500) {
//    ?         costoEnvio=0
//     ?    } 
// }
// console.log(costoEnvio);
if (edadUsario>21 && (valorCarrito>=300 || puntos>=500)  ) {
    costoEnvio=0
}


let numero=44
if (numero <10) {
    console.log('Numero < 10');
} else if(numero<30) {
    console.log('Numero < 30');
} else if(numero<40){
    console.log('Numero < 40');
} else {
    console.log('no esta dentro del rango');
}

console.log(!true);
console.log(!234234);
console.log(!'');
    
console.log(0? 'hola':'adios');
    
let precio=100
let costoDelivery= precio>=100? 0:6
console.log(costoDelivery);

let diaHoy='miercoles'
if (diaHoy==='lunes') {
    console.log('Hola hoy es lunes');
} else if (diaHoy==='martes') {
    console.log('Hola hoy es martes');
} else if (diaHoy==='miercoles') {
    console.log('Hola hoy es miercoles');
} else if (diaHoy==='Jueves') {
    console.log('Hola hoy es jueves');
} else if (diaHoy==='Viernes') {
    console.log('Hola hoy es viernes');
} else if (diaHoy==='sabado') {
    console.log('Hola hoy es sabado');
} else if (diaHoy==='domingo') {
    console.log('Hola hoy es domingo');
} else {
    console.log('el dia no es correcto');
} 
let dia='lunes'
switch (dia) {
    case 'lunes':
        console.log('hola hoy es lunes');
        break;
    case 'martes':
        console.log('hola hoy es martes');
        break;
    case 'miercoles':
        console.log('hola hoy es miercoles');
        break;
    case 'jueves':
        console.log('hola hoy es jueves');
        break;
    case 'viernes':
        console.log('hola hoy es viernes');
        break;
    case 'sabado':
        console.log('hola hoy es sabado');
        break;
    case 'domingo':
        console.log('hola hoy es domingo');
        break;
    default:
        break;
}




















