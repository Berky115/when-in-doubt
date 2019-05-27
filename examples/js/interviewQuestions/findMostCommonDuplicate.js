/*
    Find the most common duplicate in an array
 */

const Utils = require("../utils");

function findMostCommonDuplicate (input) {
  let current = { value: null, count: 0 };
  let found = {};

  for (let num of input) {
    if (found[num] !== undefined) {
      found[num] = found[num] + 1;
    } else {
      found[num] = 1;
    }

    if (found[num] > current.count) {
      current = { value: num, count: found[num] };
    }
  }
  return current.value;
}

/* Tests */
Utils.assert(findMostCommonDuplicate([1, 1, 1, 5, 5, 5, 5, 5, 5, 55, 5, 5, 5, 5, 5]), "Most common is 5");
Utils.assert(findMostCommonDuplicate([1]), "Most common is 1 by default");
