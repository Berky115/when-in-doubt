/*

Common ways to initilize arrays

Note:
Using array literals to create arrays is preferred over creating arrays with the Array constructor.
 The primary reason is simplicity: [] versus new Array() (2 characters versus 11 characters—hardly
     a fair contest). In addition, because JavaScript is highly dynamic, nothing stops someone from
     overriding the built-in Array constructor, which means calling new Array() doesn’t necessarily
     have to create an array. Thus we recommend that you generally stick to array literals.

Adding/Removing items:
push - adds an item to the end of the array.
unshift - adds an item to the beginning of the array.
pop - removes an item from the end of the array.
shift - removes an item from the beginning of the array.

*/

const Utils = require("./utils");

const ninjas = ["Kuma", "Hattori", "Yagyu"];
const samurai = new Array("Oda", "Tomoe");

Utils.assert(ninjas.length === 3, "There are three ninjas");
Utils.assert(samurai.length === 2, "And only two samurai");

Utils.assert(ninjas[0] === "Kuma", "Kuma is the first ninja");
Utils.assert(samurai[samurai.length - 1] === "Tomoe",
  "Tomoe is the last samurai");

Utils.assert(ninjas[4] === undefined,
  "We get undefined if we try to access an out of bounds index");

ninjas[4] = "Ishi";
Utils.assert(ninjas.length === 5,
  "Arrays are automatically expanded");

ninjas.length = 2;
Utils.assert(ninjas.length === 2, "There are only two ninjas now");
Utils.assert(ninjas[0] === "Kuma" && ninjas[1] === "Hattori",
  "Kuma and Hattori");
Utils.assert(ninjas[2] === undefined, "But we've lost Yagyu");

ninjas.push("Dante", "Vergil");
ninjas.splice(1, 1);
Utils.assert(ninjas.length === 3, "start at 1 remove 1 element");
ninjas.splice(1, 2);
Utils.assert(ninjas.length === 1, "start at 1 remove 2 element");

/*
Note , a splice without a second argument will remove everything starting from said index.
*/

const demons = ["Dante", "Vergil", "Nero", "Sparda"];
demons.splice(1);
Utils.assert(demons.length === 1, "Removed everything but the first demon");
