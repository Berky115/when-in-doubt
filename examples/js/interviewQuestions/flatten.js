/*

Given an array of values, write a flatten function that will take said values and return them as 1 array.

*/

const Utils = require("../utils");

let mixedValues = [[], [], [2, 3, 45, 5, [2, 2, 3], 4, 5]];

function flatten (elements) {
  return elements.reduce((flattened, toFlatten) => {
    return flattened.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

Utils.assert(flatten(mixedValues), "We have flattened these values to -  " + flatten(mixedValues));
