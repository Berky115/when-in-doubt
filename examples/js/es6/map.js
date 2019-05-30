/*

Map is a specialized es6 object, ideal for key/value mapping without potential side effects from calling non-existing values. Maps also allow for keys that are not strings, unlike a key/value paired object.

values on map...

size - property tells us how many mappings we’ve created.

set - set a value in a map. NOTE: If a value already exists, it will be over written by the new value.

get - get a value in a map.

has - notifies us whether a mapping for a particular key already exists. Returns a true/false value.

delete - removes items from the map.

clear - empty out the map

*/

const Utils = require("../utils");

const demonIslandMap = new Map();

const demon1 = { name: "Dante" };
const demon2 = { name: "Vergil" };
const demon3 = { name: "Nero" };

demonIslandMap.set(demon1, { weapon: "Sparda" });
demonIslandMap.set(demon2, { weapon: "Yamato" });

Utils.assert(demonIslandMap.get(demon1).weapon === "Sparda",
  "The first mapping works");

Utils.assert(demonIslandMap.get(demon2).weapon === "Yamato",
  "The second mapping works");

Utils.assert(demonIslandMap.get(demon3) === undefined,
  "There is no mapping for the third demon!");

Utils.assert(demonIslandMap.size === 2,
  "We've created two mappings");

Utils.assert(demonIslandMap.has(demon1) &&
      demonIslandMap.has(demon2),
"We have mappings for the first two ninjas");
Utils.assert(!demonIslandMap.has(demon3),
  "But not for the third ninja!");

demonIslandMap.delete(demon1);
Utils.assert(!demonIslandMap.has(demon1) &&
      demonIslandMap.size === 1,
"There's no first demon mapping anymore!");

demonIslandMap.clear();
Utils.assert(demonIslandMap.size === 0,
  "All mappings have been cleared");

// Iterating over maps

/*

Iterating over maps has several advantages...

- We can easily used a for of loop
- Unlike objects the order of map insertion is maintened, giving us reliable iteration

*/

const directory = new Map();

directory.set("Dante", "by the pizza stand");
directory.set("Vergil", "Out getting more power");
directory.set("Nero", "Dancin and stuff");

for (let item of directory) {
  Utils.assert(item[0] !== null, "Key:" + item[0]);
  Utils.assert(item[1] !== null, "Value:" + item[1]);
}

for (let key of directory.keys()) {
  Utils.assert(key !== null, "Key:" + key);
  Utils.assert(directory.get(key) != null,
    "Value:" + directory.get(key));
}

for (let value of directory.values()) {
  Utils.assert(value !== null, "Value:" + value);
}
