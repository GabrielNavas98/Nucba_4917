// FOR
/*
    for(desde; hasta; actualizacion){
        instrucciones a realizar (lo que se va a repetir n catidad de veces)
    }
*/
// Principio de la programación DRY "dont repeat yourself"

// for(let i = 0 ; i < 10 ; i++){
//     console.log(`el numero de esta iteracion es: ${i}`)
// }

//analizamos lo sucedido en el for
/*
    1. Inicializamos variable i con el valor cero
    2. Evalua la condicion i < 10 ?  => true
    3. si la condicion es true, realizo lo que esta dentro de las llaves
    4. si 10 < 10 => false. se termina el bucle
    5. Actualizar la variable, i++ incrementar en 1
    6. Volveriamos al paso 2 
*/

// for(let i = -10 ; i < 0 ; i++){
//     console.log(`el numero de esta iteracion es: ${i}`)
// }

//BREAK (interrumpe el ciclo)

// for(let i = 0; i < 10; i++){
//     if(i === 3 ){
//         break;
//     }
//     console.log(`el numero de esta iteracion es: ${i}`)
// }

// CONTINUE 

// for(let i = 0; i < 10; i++){
//     if(i === 3 ){
//         continue;
//     }
//     console.log(`el numero de esta iteracion es: ${i}`)
// }

// Ejercicio: imprimir los números pares
// como detectamos los numeros pares?
// podemos con el modulo %, el cual devuelve el resto de una división
// 10 / 2 => 5 y resto 0 => par
// 11 / 2 => 5 y resto 1 => impar
// 12 / 2 => 6 y resto 0
// 13 / 2 => 6 y resto 1

// for(let i = 0; i < 20; i++){
//     if( i % 2 !== 0 ){ //detectamos los impares y lo salteamos
//         continue
//     }
//     console.log(`número par ${i}`)
// }


//  WHILE
/*
    while(condicion){
        codigo a ejectutar
        actualización
    }
*/
// let i = 10

// while(i < 10){
//     console.log(`el numero de i es ${i}`)   
//     i++
// }

//  DO WHILE
// let i = 10
// do{
//     console.log(`el numero de i es ${i}`)   
//     i++
// }while(i < 10)


// ARRAY
/* estrctura de datos, que contiene elementos indexados, pueden ser de string, numeros, arrays, etc*/

let transportes = [
    'Auto',
    'Bondi',
    'Camioneta',
    'Avión',
    'Barco',
    'Subte',
    'Submarino',
    'Moto',
]

console.log(transportes) // imprime el array completo
console.log(transportes[4]) // Barco
console.log(transportes.length); // 8, largo del array, cant. de elementos

// length => Gallina Tiene Huevos => GTH

// for(let i = 0; i < transportes.length; i++){
//     console.log(`en la posicion ${i}: ${transportes[i]}`)
// }


//FOR OF
// for(let vehiculo of transportes){
//     console.log(`transporte: ${vehiculo}`)
// }