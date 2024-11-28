//-------------TimeOut
const saludar = () => {
  console.log("Hola Mundo");
};

// saludar(); // => se ejecuta inmediatamente

// const timeOutID = setTimeout(saludar, 500); //=>  se ejecuta luego del tiempo predefinido
// clearTimeout(timeOutID); //=> paramos la ejecucion del timeout

//---------SetInterval
const contar = () => {
  console.log("Contar...");
};

// const intervalID = setInterval(contar, 1000); // 'Hace un loop' cada cierto de la funcion de callback

document
  .querySelector(".clearInterval")
  .addEventListener("click", () => clearInterval(intervalID)); //paramos la ejecucion del interval

// //proceso asincronico
// console.log("Empezando el proceso"); //1

// setTimeout(() => {
//   console.log("Finalizando el proceso"); //3
// }, 2000);

// console.log("Continuando con el resto del codigo"); //2

//Promesas

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let numeroAleatorio = Math.random();

//     if (numeroAleatorio < 0.5) {
//       resolve("La promesa se resolvió correctamente");
//     } else {
//       reject(new Error("La promesa NO se resolvió correcamente"));
//     }
//   });
// });

// console.log(promesa);

// promesa
//   .then((mensaje) => console.log(mensaje))
//   .catch((err) => console.log(err));

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
