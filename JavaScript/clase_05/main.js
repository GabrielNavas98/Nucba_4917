/*
    => Tipo de datos
    => Variables
    => typeof
    => prompt
    => alert
    => console.log
    => Hoisting => es el comportamiento de js donde anota todas las variables declaradas con var y las funciones y se las lleva al inicio del js 
    => scope
    => operadores asignación, aritmeticos, comparativos, logicos
    => if
    => switch
    => operadorTernario
    => for
    => Break y continue
    => while
    => do while
    => for of
    => funciones
    => arrow functions
    => recursivas
    => callbacks
*/

/* Tipo de datos
    Numbers => 5124 3.14 .25 
    Strings => "lhds" 'Hola Mundo' `Hola ${nombre}` 
    Boolean => true false
    undefined => existe la variable pero no tiene dato alguno
    null => 
*/

/*
    Varibles

    var => se le aplica Hoisting, se puede redeclarar, se pueden reasignar
        
    let => no se le aplica hosting, no se pueden redeclarar, se puede reasignar

    const => estas son constantes, no se puede redeclarar y reasignar
*/

// console.log(soyVar);
var soyVar = "soy var"
var soyVar = 'holis soy otro var'
console.log(soyVar);

// console.log(soyLet); // Cannot access 'soyLet' before initialization

let soyLet = 'SoyLet'
soyLet = 'holis'
// let soyLet = 'no se puede'

const soyConst = 'este valor no se cambie'
// soyConst = 'sdsdasd' => no se puede

//console.log(typeof soyLet) //string
//console.log(typeof true) //boolean
//console.log(typeof 716) //number
//console.log(typeof [716, 'ajaja']) //object
/*
const edad = prompt('Ingresa tu edad') // promt devuelve un string
console.log(typeof +edad)
// string => number   '26' => 26
console.log(+edad);
// NaN not a number => no es numero pero es tipo number

alert('che esta pasando algo')
*/



let num1 = 5
// num1 += 10
num1--

// console.log(num1) // 15

/*
    ==      => compara solo el valor (igualdad)
    console.log(18 == '18'); //true

    ===     => compara el valor y tambien el tipo de dato (identidad o igualdad estricta)
    console.log(18 === '18'); //false

    !=      =>compara el valor
    console.log(18 != '18'); //false
    
    !==     =>valor y tipo de dato
    console.log(18 !== '18'); //true



    > mayor que
    < menor que
    >= mayor igual q
    <= menor igual q


    AND     &&
    OR      ||
    NOT     !

*/

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// console.log(!true)// => false
// console.log(!false)// => true

// mostrar en consola si la edad pasada por un prompt es mayor o menor de edad
// const edad = prompt('Ingresa tu edad')

// if(edad >= 18){
//     console.log('Sos mayor de edad');
// }else{
//     console.log('Sos menor de edad');
// }

// operador ternario
// edad >= 18 ?
//     console.log('Sos mayor') :
//     console.log('sos menor');
    
// const colorFavorito = prompt('Cual es tu color favorito(rojo, amarillo, verde)')
/*
    if(colorFavorito === 'rojo'){
        console.log('Aguante el rojo');
    }else if(colorFavorito === 'amarillo'){
        console.log('flores amarillas');
    }else if(colorFavorito === 'verde'){
        console.log('primavera')
    }else{
        console.log('te di opciones');
    }
*/

// switch(colorFavorito){
//     case 'rojo':
//         console.log('Aguante el rojo');
//         break;
//     case 'amarillo':
//         console.log('flores amarillas');
//         break;
//     case 'verde':
//         console.log('primavera');
//         break;
//     default:
//         console.log('te di opciones');
//         break;
// }

// Array => estructura de datos

let myArray = 
[                               //  indices
    1,                          // 0 
    'holis',                    // 1
    'Manzanas',                 // 2
    ['Autos', 'Camionetas'],    // 3
    true                        // 4
]

// console.log(myArray);
// console.log(myArray.length); // 5 elementos
// console.log(myArray[2]); //Manzanas

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

// for(let objeto of myArray){
//     console.log(objeto)
// }

let str = 'Hola como estas?'

// for (const element of str) {
// }

// 2. Usar un loop `while` para contar de 10 hacia atrás, mostrando cada número en la consola.
let i = 0;

// while(i > 0){
//     console.log(i)
//     i--
// }

// do {
//     console.log(i)
//     i--
// } while (i > 0);


// 1. Usando un loop `for`, imprimir en la consola los números que sean pares del siguiente arreglo

// let numbers = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 1 ){
//         continue
//     }
//     console.log(numbers[i])
// }


// Funciones => una funciones es una porción de codigo que procesa una entrada y nos devuelve una salida, y la podemos usar cuando querramos o necesitemos en otra parte del codigo


function saludar(){
    console.log('Hola Mundo')
}

// saludar()


// arrow functions => funciones anonimas

// const suma = (a, b) => { //a y b parametros
//     console.log(a + b)  // a y b son variables
// }
// suma(5, 8) // => dos argumentos
// // suma(5,8) * 20 => undefined


// const mult = (a, b) => {
//     console.log(a*b);
//     return(a*b) // devuelve un valor
// }

// suma(   mult(5, 6),  8  )




//console.log => es para mostrar en consola y no poder reutilizar el valor
//return => es para devolver un valor y poder reutilizarlo


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// for(let i = 0; i < numbers.length; i++){

//     if(i === 5){
//         continue
//     }

//     console.log(numbers[i]);   
// }

//funciones recursivas => es una funcion que se llama a si misma dentro de ella

// 5. Factorial de un número:
// Escribir una función recursiva que calcule el factorial de un número dado pasado por parametro.
// funciones recursivas se llaman asi misma dentro de ellas

// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 3! = 3 * 2 * 1
// 2! = 2 * 1
// 1! = 1

function factorial (n) {

    //caso base o caso de corte
    if(n === 1) return 1

    return n * factorial(n-1)
}

// console.log(factorial(6));


function cuentaAtras (n){
    console.log(n)
    
    //caso base
    if(n === 10) {
        console.log('Hasta aca llegue')
        return
    }


    return cuentaAtras(n + 1 )   
}

cuentaAtras(0)

// Secuencia de Fibonacci
// F(n) = F(n−1) + F(n−2)
    // investigar y Escribir una función recursiva que devuelva el número de Fibonacci en la posición `n` ingresada.
    F(1) = 1
    F(0) = 0

    F(5) =  F(4) +        F(3)
        F(3) + F(2)     F(2) + F(1)
    F(2) + F(1)