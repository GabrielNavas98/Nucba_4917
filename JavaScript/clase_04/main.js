//Funciones
// Sintaxis
//  function nombreFuncion () {
//      ...instrucciones a ejecutar
//  }

function saludar(){
    console.log('Hola mundo!!')
}

// saludar();

function sumar(){
    //hay un contexto de ejecución
    let num1 = 5;
    let num2 = 2;

    let result = num1 + num2;
    console.log(result)
}

//sumar()

// Parámetros

function saludoPersonal(nombre) {
    console.log(`Hola ${nombre}`)
}

// saludoPersonal('Facundo') // Hola Facundo
// saludoPersonal() // Hola undefined

function descripcionPersonal(nombre, edad){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

// descripcionPersonal('Amelia', '18')


// Parámetro por defecto
function multiplicar(a, b = 2) {
    console.log(a * b)
}

// multiplicar(5) // 10
// multiplicar(5, 5) // 25


// RETURN => vamos a obtener un valor de retorno de una funcion que sea ejectutada para poder usarlo en otro lado..

function sumarV2(a, b) {
    return a + b
    console.log(a + b)  //<= se ejecuta ? => NOOOO
}

// console.log(sumarV2(5, 6)) // 11


function restar(a, b){
    return a - b // => es retornar valor para poder usarlo
}
//              a => 3         b
// multiplicar( restar(10, 7) ,   3   )



function imprimirSiEsMenor(num){

    if(num > 10){
        return; // no devuelve un valor pero si undefined
    }

    console.log(num)
}

// imprimirSiEsMenor(5) //5
// imprimirSiEsMenor(15) // no consologuea


// Arrow Functions
// Sintaxis
/*
    const nombreFuncionFlecha = (parametro) => {
        codigo a ejecutar    
    }

*/
// forma completa
const sumarV3 = (a, b) => {
    return a + b
}
// console.log(sumarV3(5, 6))

// forma abreviada
const restarV2 = (a, b) => a - b
// console.log(restarV2(20, 5))


// Funciones Recursivas => se llaman a si misma dentro de ellas

const cuentaAtras = (numero) => {
    
    if( numero === 0){
        return;
    }

    console.log(numero)
    return cuentaAtras(numero - 1)
}

// cuentaAtras(10)

/*
    1. la entrada seria 10
    2. pregunta 10 es igual a 0 ? => false
    3. console.log
    4. se llama asi misma con 10 - 1
    ....
    5. pregunta 0 es igual a 0 ? => true
    6. return
*/

const duplicar = (num) => {
    num = num * 2
    console.log(num)
    
    if(num > 100){
        return console.log('Te fuiste, una banda')
    }

    return duplicar(num)
}

// duplicar(2)

/*
Callbacks 
    es una fcion que recibe como parametro/argumento otra función
*/

const alertHola = (nombre) => {
    return alert(`Hola ${nombre}`)
}
// alertHola('Messi')

const consoleHola = (nombre) => {
    return console.log(`Hola ${nombre}`)
}
// consoleHola('Lanzini')

const procesarEntrada = (callback) => {
    const nombre = prompt('Ingresa tu nombre')

    callback(nombre)
}

procesarEntrada(consoleHola)