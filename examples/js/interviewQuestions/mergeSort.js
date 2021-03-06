const Utils = require("../utils");
const path = require("path");

function mergeSort (vals) {
  if (vals.length === 1) {
    return vals;
  }
  const middle = Math.floor(vals.length / 2);
  const left = vals.slice(0, middle);
  const right = vals.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
Utils.assert(mergeSort(list), path.join(" List is now ", mergeSort(list).toString()));
