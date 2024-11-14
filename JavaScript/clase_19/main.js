// Opción 1 - Import todo el módulo
import * as funciones from "./funciones.js";

console.log(funciones.saludar);
funciones.saludar("Mundo");

console.log(funciones.despedir);
console.log(funciones.nombre);

funciones.despedir(funciones.nombre);

// Opción 2 - Import una función especifica y renombrarla
import {
  saludar as saludo,
  despedir as despedida,
  nombre as name,
} from "./funciones.js";

saludo("Mundo2");
despedida("Mundo2");
console.log(name);

// Opción 3 - Import una función especifica
import { saludar, despedir, nombre } from "./funciones.js";

saludar("Mundo3");
despedir("Mundo3");
console.log(nombre);
