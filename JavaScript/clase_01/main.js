/*
    Tipos de datos JS
    -> Number= 1 / 2 / 5465 / 3.14
    -> String = "hola" / 'hola' / `hola`
    -> boolean = true / false
    undefined indica que una variable no a sido inicializada 
    null se usa para indicar intencionalmente que una variable no tiene valor
    
*/

// valriables

// declaración
var numeroA 
// asiganación / inicialización
numeroA = 15

var numeroB = 20
var resultado = numeroA + numeroB

//para mostrar en consola algo en consola
// console.log(numeroA)
// console.log(numeroB)
// console.log(resultado)


var textoA = 'Harry'
var textoB = 'Potter'

// console.log(textoA + " " + textoB) //Harry Potter

//concatenación
// console.log(textoA + numeroA) //'Harry' + 15 => 'Harry15'

//transformación de string a number

var edad = '18' //string
// console.log(+edad) // pasarlo a numero

//como saber el tipo de dato de una variable
//typeof
// console.log(typeof edad) //string
// console.log(typeof numeroA) //number


// VAR
// var tipoVar // Js por detras declara las variables al principio (solo VAR)
// console.log(tipoVar) //no esta siendo inicializada
// tipoVar = 'Hola soy var'

// var tipoVar = 'holis'
// console.log(tipoVar)
// tipoVar = 'chau' //✅reasignar
// console.log(tipoVar)
// var tipoVar = 'soy otra' //✅redeclarando
// console.log(tipoVar)



// LET

// console.log(tipoLet) //aca no conoce lo que es tipoLet
// let tipoLet = 'Hola soy un let'

// let tipoLet = 'holis'
// console.log(tipoLet)
// tipoLet = 'chau' //✅reasignar
// console.log(tipoLet)
// let tipoLet = 'soy otra' //❌no se redeclara con let
// console.log(tipoLet)

//CONST

const constante = 25
// console.log(constante)
// constante = 30 //❌reasignar
// const constante = 'dkfjbb' ❌no redeclara

/*
//operadores

    + = sumar
    - = resta
    * = multiplicacion
    / = division
    ** = calcular la base a la potencia del exponente
    % = modulo, nos da el resto
    ++ = incrementar, suma 1
    -- = decrementador, restar 1
*/

var numeroUno = 10
var numeroDos = 5
//suma
// console.log(numeroUno + numeroDos)
//resta
// console.log(numeroUno - numeroDos)

//multiplicacion
//console.log(numeroUno * numeroDos)

//division
//console.log(numeroUno / numeroDos)
//incrementar, sumar y asignar 1
numeroUno++
// console.log(numeroUno) //11

//decrementar
numeroDos--
// console.log(numeroDos) //4



// var nombreUsuario = prompt('Ingresa tu nombre:')
// console.log(`Hola ${nombreUsuario}`)
alert('Che estas seguro?')