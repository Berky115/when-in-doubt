/*

How sort callback works:
If a callback returns a value less than 0, then item a should come before item b.
If a callback returns a value equal to 0, then items a and b are on equal footing (as far as the sorting algorithm is concerned, they’re equal).
If a callback returns a value greater than 0, then item a should come after item b.

*/

const Utils = require("./utils");

let values = [1, 2, 2, 2, 3, 2, 4, 44, 3, 4, 1, 5, 2, 3, 1, 2];

// ascending
console.log(values.sort((a, b) => a - b));
// descending
console.log(values.sort((a, b) => b - a));

// Advanced example

const ninjas = [{ name: "Yoshi" }, { name: "Yagyu" }, { name: "Kuma" }];

ninjas.sort(function (ninja1, ninja2) {
  if (ninja1.name < ninja2.name) { return -1; }
  if (ninja1.name > ninja2.name) { return 1; }

  return 0;
});

ninjas.sort();
Utils.assert(ninjas[0].name === "Kuma", "Kuma is first");
Utils.assert(ninjas[1].name === "Yagyu", "Yagyu is second");
Utils.assert(ninjas[2].name === "Yoshi", "Yoshi is third");
