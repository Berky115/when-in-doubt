/*

ES6 officially introduces Sets to javascript. A set is a collection of data that does not have duplicate entries.

Note: Items are iterated over in order they where created.

methods include...

add - add a value to the set. If already present no change will be seen

has - returns true/false if Set has a certain value

size - returns how many items are in a set

*/

const Utils = require("../utils");

const demons = new Set(["Dante", "Nero"]);

Utils.assert(demons.has("Dante"), "Hattori is in our set");
Utils.assert(demons.size === 2, "There are only three demons in our set!");
Utils.assert(!demons.has("Vergil"), "Vergil is not in, yet..");

demons.add("Vergil");

Utils.assert(demons.has("Vergil"), "Vergil is added");
Utils.assert(demons.size === 3, "There are 3 demons in our set!");
Utils.assert(demons.has("Dante"), "Dante is already added");

demons.add("Dante");

Utils.assert(demons.size === 3, "Adding Dante again has no effect");

for (let demon of demons) {
  Utils.assert(demon !== null, demons);
}

// Combining sets: Union

const ninjas = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurai = new Set(["Hattori", "Oda", "Tomoe"]);

const warriors = new Set([...ninjas, ...samurai]);

Utils.assert(warriors.has("Kuma"), "Kuma is here");
Utils.assert(warriors.has("Hattori"), "And Hattori");
Utils.assert(warriors.has("Yagyu"), "And Yagyu");
Utils.assert(warriors.has("Oda"), "And Oda");
Utils.assert(warriors.has("Tomoe"), "Tomoe, last but not least");

Utils.assert(warriors.size === 5, "There are 5 warriors in total");

// Finding intersection data: intersections

// note. Must use ... operator to unpack a set and treat like an array
const ninjaSamurais = new Set(
  [...ninjas].filter(ninja => samurai.has(ninja))
);

Utils.assert(ninjaSamurais.size === 1, "There's only one ninja samurai");
Utils.assert(ninjaSamurais.has("Hattori"), "Hattori is his name");

// Finding the differences between sets: difference

const pureNinjas = new Set(
  [...ninjas].filter(ninja => !samurai.has(ninja))
);

Utils.assert(pureNinjas.size === 2, "There's only one ninja samurai");
Utils.assert(pureNinjas.has("Kuma"), "Kuma is a true ninja");
Utils.assert(pureNinjas.has("Yagyu"), "Yagyu is a true ninja");
