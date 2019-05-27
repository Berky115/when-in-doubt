const Utils = require("./utils");

function Person () {}
Person.prototype.dance = function () { console.log("I'm dancin!"); };

function Ninja () {}
Ninja.prototype = new Person();

const ninja = new Ninja();
Utils.assert(ninja instanceof Ninja,
  "ninja receives functionality from the Ninja prototype");
Utils.assert(ninja instanceof Person, "... and the Person prototype");
Utils.assert(ninja instanceof Object, "... and the Object prototype");
Utils.assert(typeof ninja.dance === "function", "... and can dance!");

Utils.assert(ninja.constructor === Person,
  "The ninja objects constructor has been replaced! It is now Person instead. Let's fix this so we have more predictable behavior");

//  configure the constructor property to be Ninja.
Object.defineProperty(Ninja.prototype, "constructor", {
  enumerable: false,
  value: Ninja,
  writable: true
});

Utils.assert(ninja.constructor === Ninja,
  "Connection from ninja instances to Ninja constructor reestablished!");

/*

NOTE
Another technique that may have occurred to you, and that we
advise strongly against, is to use the Person prototype object
directly as the Ninja prototype, like this: Ninja.prototype = Person.prototype.
Any changes to the Ninja prototype will then also change the Person prototype
(because they’re the same object), and that’s bound to have undesirable
side effects.

*/
