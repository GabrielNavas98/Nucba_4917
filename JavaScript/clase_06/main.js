//Closures

const generarFuncion = () => {

    const nombre = 'Francisco'

    const mostraNombre = () => {
        //no existe nombre no lo conoce
        return console.log(nombre)
    }

    return mostraNombre //le inyecta por clousure el scope local
}
 
const nuevaFuncion = generarFuncion()

// nuevaFuncion()


//OBJETOS => colección de datos {   key :   value   }

let persona = {
    nombre: 'Lionel',
    apellido: 'Messi',
    edad: 37,
    equipos: ['Bacelona', 'PSG', 'Inter Miami'],
    trofeos: {
        copa: 'Champions',
        liga: 'Liga de España',
        seleccion: 'Mundial'
    }
}

//accedemos a las props de nuestro objeto
// console.log(persona);
// console.log(persona.apellido); //dot notation
// console.log(persona['equipos']);
// console.log(persona.trofeos.copa)

//agregamos props a nuestro objeto
persona.esCasado = true
persona['crack'] = true
persona.edad = 40



// console.log(persona);

//METODOS => funciones dentro del objeto


let persona2 = {
    nombre: 'Lionel',
    apellido: 'Messi',
    edad: 37,
    equipos: ['Bacelona', 'PSG', 'Inter Miami'],
    trofeos: {
        copa: 'Champions',
        liga: 'Liga de España',
        seleccion: 'Mundial'
    },
    saludar: function (){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

// persona2.saludar()

//Object.Values
const value = Object.values(persona2)
// console.log(value);

//Object.Keys
const keys = Object.keys(persona2)
// console.log(keys);

//Object.Entries
const entries = Object.entries(persona2)
// console.log(entries);

//Spread operator

const nums = [1, 2, 3] 
const copyNums = [...nums]

copyNums.push(4)

// console.log([...copyNums, 'Otra cosa', ...nums]);
// console.log(nums);

const moto = {
    color: 'azul',
    motor: 110
}

const auto = {
    color: 'rojo',
    motor: '1.6',
    escape: true
}


// console.log({...auto, ...moto, escape: false})

//REST operator
//mostar en consola los elementos pasados a una función

const restOperator = (a, b, ...rest) => {
    console.log('a =>',a);
    console.log('b =>', b);
    console.log('resto =>', rest)
}

// restOperator(1,5,8,4,7,9,16)


//Destructuring
//con objetos
const obj = {
    name: 'De Paul',
    age: 35,
    country: 'Argentina'
}
const {name, age, country} = obj


// console.log(name)
// console.log(age)
// console.log(country)


//con array
const array = [1,2,3,4,5,6]

const [num1, num2, num3, ...resto] = array

console.log(num1);
console.log(num2);
console.log(num3);
console.log(resto);

