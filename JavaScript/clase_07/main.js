//Metodos => metodos son funciones dentro de un objeto
//JS maneja a todo como si fuese un objeto, en este caso string

//.length
let miString= 'Hola Mundo!'

console.log(miString.length);//11
console.log(miString.length - 1); //el ultimo indice de nuestro str => 10

//.toUpperCase() // .toLowerCase()

console.log(miString.toLowerCase()); //hola mundo!
console.log(miString.toUpperCase());//HOLA MUNDO!

//.replace()

let nuevoString = 'Messi es el mejor futbolista del mundo'
let replaceStr = nuevoString.replace('Messi', 'Di María')
console.log(replaceStr);

//.replaceAll()

let replaceAllStr = nuevoString.replaceAll(' ', '_')
console.log(replaceAllStr);

//.indexOf() => nos devuelve la posición de la primera ocurrencia de un valor pasado por parametro

let textoIndex = 'Hola Mundo!. Como estan?'

console.log(textoIndex.indexOf('!'));//10
console.log(textoIndex.indexOf('.'));//11
console.log(textoIndex.indexOf('c'));//-1 => no encuentra el caracter pasado
console.log(textoIndex.indexOf('Como'));//13
console.log(textoIndex.indexOf('Como', 17));//-1
console.log(textoIndex.indexOf('Como', 13));//13
console.log(textoIndex.indexOf('?', 10));//23
console.log(textoIndex.indexOf('?', 24));//-1



//.trim() => quita espacios del principio y del final
// let email = prompt('Ingresa tu email')
// console.log(email);
// console.log(email.trim());


//split()

let stringSplit = 'Hola soy un string de caracteres!'

// console.log(stringSplit.split(' '));//['Hola', 'soy', 'un', 'string', 'de', 'caracteres!']

//typeof

let num = 5
let str = 'Holis'
let miArray = ['holis', true, 'rojo', 5]

// console.log(typeof num);//number
// console.log(typeof str);//string
// console.log(typeof miArray);//object

//.repeat()
let nombre = 'Gonzalo '
// console.log(nombre.repeat(3));

//chartAt() => devuelve el elemento del indice pasado por parametro
// console.log(nombre.charAt(3));//z
// console.log(nombre.charAt(10));//''

//.concat()
let array = [1,2,3]
let color = 'Rojo'

// console.log(array.concat([5,6,7]));// [1, 2, 3, 5, 6, 7]
// console.log(array.concat('10'));// [1, 2, 3, '10']
// console.log(color.concat(' hay 10'));// Rojo hay 10
// console.log(color.concat(array));// Rojo1,2,3

// .startsWith()
let texto = 'Veamos la consola'
// console.log(texto.startsWith('Vea'));//true
// console.log(texto.startsWith('Veamos'));//true
// console.log(texto.startsWith('consola'));//false
// console.log(texto.startsWith('v'));//false


// .endsWith()
// console.log(texto.endsWith('Vea'));//false
// console.log(texto.endsWith('Veamos'));//fals
// console.log(texto.endsWith('consola'));//true
// console.log(texto.endsWith('v'));//false
// console.log(texto.endsWith('a'));//true

//includes()

let textoIncludes = 'Holis amamos JS'

// console.log(textoIncludes.includes('H'));//true
// console.log(textoIncludes.includes('?'));//false
// console.log(textoIncludes.includes('@'));//false

let arrayInclude = ['rojo', 'azul', 'violeta']

// console.log(arrayInclude.includes('rojo'));//true
// console.log(arrayInclude.includes('Rojo'));//false


//Necesitamos crear una función que reciba como parametro dos strings y que nos valide si el segundo parametro esta incluidoo en el primero checkStr('Hola como estas', 'hola') => true

const checkStr = (str1, str2) => {
    //sanitizamos
    let str1Minus = str1.toLowerCase()
    let str2Minus = str2.toLowerCase()

    let isInString = str1Minus.includes(str2Minus)
    if(isInString){
        return console.log(`se encontro '${str2}' dentro de '${str1}'`);
    }else{
        console.log(`no se encontro '${str2}' dentro de '${str1}' proba otra palabra`);
    }   
}

checkStr('Hola como estas? yo bien', '?') //=> true





//slice() => el primer indice lo incluye y el ultimo lo excluye
let textoSlice = 'Veamos la consola'

// console.log(textoSlice.length);//17
// console.log(textoSlice.slice(0, 6));//Veamos
// console.log(textoSlice.slice(0, 3));//Vea
// console.log(textoSlice.slice(0, 4));//Veam
// console.log(textoSlice.slice(3, 8));//Veam
// console.log(textoSlice.slice(10, 17));//Veam

// el ejercicio numero 5 hay q crear una función y mostrar en consola una cierta cantidad de veces una palabra, lo cual hice la función, pero no me lo repite la cantidad de veces q le pongo si no que me pone el nro al costado izquierdo

let repeatFunction = (str, n) => {
    // return console.log(str.repeat(n))
    for(let i = 1; i <= n; i++){
        console.log(`repetición ${i}: ${str} `)
    }
}

repeatFunction('Hola', 10)