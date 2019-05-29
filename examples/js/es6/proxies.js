/*

Proxies are a es6 feature that allow us to write interesting code around an object. This leads to many opportunites

Note: For now, we recommend that you be careful when using proxies. Although
they allow you to be creative with controlling access to objects, that amount of
control comes with performance issues. You can use proxies with code that’s not
performance sensitive, but be careful when using them in code that’s executed a lot.
As always, we recommend that you thoroughly test the performance of your code.

*/

const Utils = require("../Utils");

const emperor = { name: "Komei" };
const representative = new Proxy(emperor, {
  get: (target, key) => {
    console.log("Reading " + key + " through a proxy");
    return key in target ? target[key]
      : "Don't bother the emperor!";
  },
  set: (target, key, value) => {
    console.log("Writing " + key + " through a proxy");
    target[key] = value;
  }
});

Utils.assert(emperor.name === "Komei", "The emperor's name is Komei");
Utils.assert(representative.name === "Komei",
  "We can get the name property through a proxy");

Utils.assert(emperor.nickname === undefined,
  "The emperor doesn’t have a nickname ");
Utils.assert(representative.nickname === "Don't bother the emperor!",
  "The proxy jumps in when we make inproper requests");

representative.nickname = "Tenno";
Utils.assert(emperor.nickname === "Tenno",
  "The emperor now has a nickname");
Utils.assert(representative.nickname === "Tenno",
  "The nickname is also accessible through the proxy");
