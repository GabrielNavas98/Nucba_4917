import _ from "lodash";
import { add, substract } from "./assets/numberUtilities.js";

import * as strFunction from "./assets/strUtilities.js";

import { capitaliza as transformaMayus } from "./assets/strUtilities.js";

const index = _.sortedIndex(["perro", "gato", "tortuga"], "toruga");
console.log(index);

console.log(add(5, 8));
console.log(substract(8, 26));

console.log(strFunction.capitaliza("holis"));
console.log(strFunction.reverseString("holis"));
console.log(transformaMayus());
