//Metodos de Arrays

//.length => nos devuelve el largo de nuestro array
const array = [1,2,3,4,'Hola']
// console.log(array.length); //5


//.indexOf() => nos devuelve el indice del elemento que recibe como paramtero, si no lo encuentra devuelve -1.
const arrayIndexOf = [1,2,3,4,5,'perro', 'gato']

// console.log(arrayIndexOf.indexOf('perro'));//5
// console.log(arrayIndexOf.indexOf(2));//1
// console.log(arrayIndexOf.indexOf('caballo')); // -1


//.toString() => nos devuelve un string conformado con los elementos del array separados por ,

const animales = ['gato', 'perro', 'conejo', 'gorila']
// console.log(animales.toString());// gato,perro,conejo,gorila


//.concat() => concatenamos, "unimos" dos array en uno solo.
let masAnimales = ['loro', 'pajaro', 'serpinte']
// console.log(animales.concat(masAnimales));


//.push() => nos agrega un elemento al final
// console.log(animales.push('rinoceronte'));//5 => seria el nuevo length
// console.log(animales);

//.pop() => nos permite elimnar el ultimo elemento y nos lo retorna
// const animalEliminado = animales.pop();//gorila
// console.log(animales.pop())//comejo
// console.log(animales);
// console.log(animalEliminado);


//.unshift() => nos agrega un elemnto al principio de nuestro array
// console.log(animales.unshift('serpiente'))//5
// console.log(animales);//['serpiente', 'gato', 'perro', 'conejo', 'gorila']
// animales.unshift('caballo')
// console.log(animales);//['caballo','serpiente', 'gato', 'perro', 'conejo', 'gorila']

//.shift() => nos elimina y RETORNA el primer elemento de nuesto array
// const animalEliminado = animales.shift()
// console.log(animalEliminado);//gato 
// console.log(animales);//['perro', 'conejo', 'gorila']

//.join() => nos duelve un string separando los elementos con el parametro que le pasemo
// console.log(animales.join(' - '));//gato - perro - conejo - gorila


//.reverse() => invierte el array (modifica el array)
// console.log(animales);
// animales.reverse()
// console.log(animales);

//.slice() => nos devulve una copia del array acotada, no incluye el final, si el inicio
//                      0       1          2        3
// const animales = ['gato', 'perro', 'conejo', 'gorila']
// console.log(animales.slice(1, 3));//['perro', 'conejo']
// console.log(animales.slice(2));//['conejo', 'gorila']
// console.log(animales.slice(-2));//['conejo', 'gorila']
// console.log(animales.slice(2, -1));//['conejo]


//ejercicio
// const string = 'Quiero invertir este string!'
// console.log(string.split('').reverse().join(''));//!gnirts etse ritrevni oreiuQ

//Metodos avanzados => reciben una funcion de callback como argumento

//.forEach() => realiza una accion por cada elemento, segun la funcion de cb
const numeros = [1,2,3,4,5,6,7,8,9,10]

// numeros.forEach( (numero, indice) => {
//     console.log(`soy el numero ${numero} en el indice ${indice}`);
// })

const users = ['Ruben', 'Valentin', 'Francisco', 'Gonzalo', 'Gabriel']

// users.forEach( (user, indice) => {
//     console.log(`usuario ${indice}: ${user}`);
// })


//.map() => realiza una acción y retorna un nuevo array
// const triplicados = numeros.map( (numero) => numero * 3 )
// const triplicados = numeros.map( (numero) => { return numero * 3} )
// console.log(triplicados);

//.filter() => filtra los elementos y guarda en un array segun la condicion de cb

// numerosPares => numero % 2 === 0 => booleano true/false

// const numerosPares = numeros.filter((numero)=> {
//     return numero % 2 === 0
// })
// console.log(numerosPares);

//.find() => nos devuelve el primer elemento del array que cumpla la condicion del cb
// console.log(
//     numeros.find( (numero) => numero % 2 === 0   ) //2
// )

// console.log(
//     users.find( (user) => user === 'Juan'   ) //undefined
// )


// const numeros = [1,2,3,4,5,6,7,8,9,10]

//.every() => nos devuelven true si todos cumplen la condición
// console.log(
//     numeros.every((numero) => numero > 5) //false
// );

// console.log(
//     numeros.every((numero) => numero > 0) //true
// );
// [
//     {nombre:'pepito', edad:18},
//     {nombre:'pepito', edad:15},
//     {nombre:'pepito', edad:18},
//     {nombre:'pepito', edad:13},
//     {nombre:'pepito', edad:19},
//     {nombre:'pepito', edad:21},   
// ]

//.some() => nos devuelven true si por lo menos uno cumple la condición
// console.log(
//     numeros.some((numero) => numero > 5) //true
// );

// console.log(
//     numeros.some((numero) => numero > 20) //false
// );


//sort() => sirve para ordenar

const numerosDesordenados = [10,2,5,1,3,4,6,7,9,8]

// const numerosOrdenadosUnicode = numerosDesordenados.sort() //ordenamos segun unicode
// console.log(numerosOrdenadosUnicode);

console.log(
    numerosDesordenados.sort( (a, b) => { return a - b})
);

// a - b => negativo => lo deja tal cual
// a - b => positivo => intercambia
// a - b => 0 => son iguales

//Reduce => recorre el array y ejecuta una accion por cada elemento y devuelve un unico valor

const suma = numerosDesordenados.reduce((acumulador, numero) => {
    return acumulador + numero
})

console.log(suma);//55

const palabras = ['Hola', 'Mundo' , '!']
const frase = palabras.reduce((acc, val) => acc + ' ' +val)
console.log(frase);
