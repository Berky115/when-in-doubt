
/*
Reduce - A handy method for aggregating values. A recuder has...

- parameters or aggregated and new value that feed a callback function
- an OPTIONAL starting value

*/

const Utils = require("../utils");

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((aggregated, number) => aggregated + number);

Utils.assert(sum === 10, "The sum of first four numbers is 10, we passed no default start value so it starts at 0");

const sum2 = numbers.reduce((aggregated, number) => aggregated + number, 5);

Utils.assert(sum2 === 15, "The sum of first four numbers is 15, we passed in a start value of 5");
