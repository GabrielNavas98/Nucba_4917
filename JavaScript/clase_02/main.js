
/*
Hosting:
    es el compartamiento de JS de mover las DECLARACIONES de las variables con "var" y las funciones al inicio del archivo
*/

// console.log(nombre) //undefined
// var nombre = 'Gabriel'

// let nombre = "Gabriel"
// console.log(nombre) // Cannot access 'nombre' before initialization

/*
    Scope: el alcance que tiene una variable "LOCAL / GLOBAL"
*/

// ambito global
let x = 15

var a = 'Soy global'


// let x = 20

{
    //bloque 1
    var b = 'estoy dentro de un bloque 1' // por hosting se hace global
}

{
    //bloque 2
    var c = 'Estoy dentro de 2'  // por hosting se hace global
}

{
    //bloque 3
    let d = 'Estoy dentro de 3' //no se aplica hosting
    const e = 'Estoy dentro de 3 y const' //no se aplica hosting
    // console.log(x) // 15
    // console.log(c) //Estoy dentro de 2
}

/*
    console.log(a); // soy global
    console.log(b);
    console.log(c);
    console.log(d); // ReferenceError: d is not defined
    console.log(e); //ReferenceError: e is not defined
*/

/* OPERADORES */

// igualdad solo valores
/*
    console.log(18 == '18') //true
    console.log(18 == '20') //false
*/
// igualdad estricta valores y tipo de dato
/*
    console.log(18 === '18') // false
    console.log(18 === 18) // true
*/

/*
//desigualdad estricta
    console.log(18 !== '18') //true

//desigualdad estricta
    console.log(18 != '18') // false
*/

/*
let numero1 = 18
let numero2 = 5
// menor que
console.log(numero1 < numero2) //false


// mayor que
console.log(18 > 5) // true


//menor igual que
console.log(9 <= 9) //true


//mayor igual que
console.log(9 >= 9) //true
 */

//LOGICOS

// AND necesita que todas sus comparaciones sean true para dar true
/*
    v && v => v
    v && f => f
    f && v => f
    f && f => f
*/    
/*
console.log(18 > 5 && 10 < 11) //true
console.log(18 > 5 && 10 === '10') //false
*/
 
// OR necesita que una de sus comparaciones sean true para dar true
/*
    v || v => v
    v || f => v
    f || v => v
    f || f => f
*/    
/*
console.log(18 > 5 || 9 < 9) //true
console.log(18 < 5 || 10 === '10') //false
*/


// NOT invierte la verdad
/*
console.log(!true) //false
console.log(!false) //true
*/

/*  CONDICIONALES   */
/*
    sintaxis
    if (condicion){
        instrucciones si es true
    }

    if (condicion){
        instrucciones si es true
    }else{
        instrucciones si es false
    }
*/

/* ❌
if (5 < 3) {
    console.log('Si es mayor')
}
console.log('esto es menor')
*/
/*✅
if (5 < 3) {
    console.log('Si es mayor')
}else{
    console.log('No es mayor')
}
console.log('estoy fuera')
*/
/*
//ejemplo con lluvia
let llueve = true

if( llueve ){
    alert('che esta lloviendo, lleva piloto')
}else{
    alert('Anda tranqui no esta lloviendo')
}
*/

// let generos = prompt(
//     '¿Que genero de pelis te gustan? (Comedia, Terror, drama, acción)'
// )

// console.log(generos)

// if( generos === 'Comedia' ){
//     console.log("Te recomiendo los locos adams")
// } else if( generos === 'Terror' ){
//     console.log("Te recomiendo It")
// } else if( generos === 'drama' ){
//     console.log("Te recomiendo los loco por ti")
// } else if( generos === 'acción' ){
//     console.log("Te recomiendo alguna de marvel")
// } else{
//     console.log('che, te di opciones')
// }

// SWITCH

// switch (expresion) {
//     case 1:
        //codigo
//     break;
//     case 2:
        //codigo
//     break;  
//     default:
//         break;
// }
/*

switch (generos) {
    case 'comedia':
        console.log("Te recomiendo los locos adams");
        break;
    case 'Terror':
        console.log("Te recomiendo It");
        break;
    case 'drama':
        console.log("Te recomiendo los loco por ti");
        break;
    case 'accion':
        console.log("Te recomiendo alguna de marvel");
        break;
    default:
        console.log('che, te di opciones');
        break;
}

*/

let edad = prompt(
    '¿cuantos tenes pa?'
)

// if( edad >= 18){
//     console.log('sos mayor')
// }else{
//     console.log('sos menor')
// }

edad >= 18 
    ?  console.log('sos mayor')
    :  console.log('sos menor')