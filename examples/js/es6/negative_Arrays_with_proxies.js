/*

Note: For now, we recommend that you be careful when using proxies.
Although they allow you to be creative with controlling access to objects,
that amount of control comes with performance issues. You can use proxies
with code that’s not performance sensitive, but be careful when using them in
code that’s executed a lot. As always, we recommend that you thoroughly test the performance of your code.

*/

const Utils = require("../utils");

function createNegativeArrayProxy (array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array");
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, val) => {
      index = +index;
      return target[index < 0 ? target.length + index : index] = val;
    }
  });
}

const ninjas = ["Yoshi", "Kuma", "Hattori"];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

Utils.assert(ninjas[0] === "Yoshi" && ninjas[1] === "Kuma" &&
      ninjas[2] === "Hattori",
"Array items accessed through positive indexes");

Utils.assert(proxiedNinjas[0] === "Yoshi" && proxiedNinjas[1] === "Kuma" &&
      proxiedNinjas[2] === "Hattori",
"Array items accessed through positive indexes on a proxy");

Utils.assert(typeof ninjas[-1] === "undefined" &&
      typeof ninjas[-2] === "undefined" &&
      typeof ninjas[-3] === "undefined",
"Items cannot be accessed through negative indexes on an array");

Utils.assert(proxiedNinjas[-1] === "Hattori" &&
      proxiedNinjas[-2] === "Kuma" &&
      proxiedNinjas[-3] === "Yoshi",
"But they can be accessed through negative indexes");

proxiedNinjas[-1] = "Hachi";
Utils.assert(proxiedNinjas[-1] === "Hachi" && ninjas[2] === "Hachi",
  "Items can be changed through negative indexes");
