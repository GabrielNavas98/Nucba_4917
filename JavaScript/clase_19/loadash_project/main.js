import _ from "lodash";

const array = ["perro", "gato", "Tortuga", "Tiburon", "Conejo", "Cuyi"];
console.log(_.chunk(array, 4)); //divide en partes

console.log(_.shuffle(array)); //mezcla

console.log(_.sample(array)); //aleatorio
