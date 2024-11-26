//call Stack
// Stack/CallStack (Pila de platos): Va apilando de forma organizada las diferentes instrucciones que se llamen. Lleva un rastro de donde esta nuestra app y en que punto de ejecucion nos encontramos. utiliza LIFO las in first out

const hola = () => {
  console.log("Hola");
};

const nucba = () => {
  chau();
  console.log("nucba");
};

const chau = () => {
  console.log("chau");
};

const init = () => {
  hola();
  nucba();
};

// init();

//Memory Heap
// Memory Heap: De forma desorganizada guarda la info de las variables/funciones, etc
const obj1 = { valor: 1 };

const obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

obj2.valor = 2;

// console.log(obj2.valor);

// console.log(obj1.valor);

// console.log(obj1 === obj2); //son iguales por que ambos apuntan al mismo lugar en la memoria

// console.log(obj1);
// console.log(obj2);

const obj3 = { ...obj1 }; // se pasa el contenido de la referencia de la memoria
obj3.valor = 3;

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const ejemploNumero1 = 20;
const ejemploNumero2 = 20;

// console.log(ejemploNumero1 === ejemploNumero2);

const objetoEjemplo1 = {
  // hsk2545
  id: 1,
  nombre: "Lionel",
  apellido: "Messi",
};
const objetoEjemplo2 = {
  // hsj2689
  id: 1,
  nombre: "Lionel",
  apellido: "Messi",
};

// console.log(objetoEjemplo1 === objetoEjemplo2);

//Event Loop

// Cola de tareas (task qeue): Son las tareas que estan listas para pasar a la pila de llamadas y ejecutarse.
console.log("Hola");

setTimeout(() => {
  console.log("Nucba");
}, 3000);

console.log("Pobando event loop");

// const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
// console.log(response);
