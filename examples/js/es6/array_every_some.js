/*

Handy functions to determine characteristics of arrays and values within.
.every - every element in the array has the expected condition
.some - some values in the array have the expected condition

*/

const Utils = require("../utils");

const ninjas = [
  { name: "Yagyu", weapon: "shuriken" },
  { name: "Yoshi" },
  { name: "Kuma", weapon: "wakizashi" }
];

const allNinjasAreNamed = ninjas.every(ninja => "name" in ninja);
const allNinjasAreArmed = ninjas.every(ninja => "weapon" in ninja);

Utils.assert(allNinjasAreNamed, "Every ninja has a name");
Utils.assert(!allNinjasAreArmed, "But not every ninja is armed");

const someNinjasAreArmed = ninjas.some(ninja => "weapon" in ninja);
Utils.assert(someNinjasAreArmed, "But some ninjas are armed");
