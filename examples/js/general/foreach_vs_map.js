/*
Below are examples of  the use of foreach and map.

Foreach works like a traditional loop. Operating on the EXISTING value set
Map: takes a callback function that operates on every element of the values it is called upon. It creates a NEW array

*/

const Utils = require("./utils");

const values = [1, 2, 3];
values.forEach((elem, index) => {
  values[index] = elem * 2;
});

// mutates original array
Utils.assert(values, "The values have been doubled in the ORIGINAL array");

const values2 = [1, 2, 3];
const doubled = values2.map(num => {
  return num * 2;
});

// creates a copy
Utils.assert(doubled, "The values have been doubled and placed in a NEW array");
