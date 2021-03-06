const Utils = require("./utils");

function Ninja () {}

const ninja = new Ninja();

Utils.assert(ninja instanceof Ninja, "INSTANCEOF: Our ninja is a Ninja! ");

Ninja.prototype = {};

Utils.assert(!(ninja instanceof Ninja), "INSTANCEOF: The ninja is now not a Ninja! This demonstrates a gotch of instanceOf! Instance of checks through the prototype chain. When we set Ninja's prototype to an empty object. That effected what 'instance' we were looking at.");

// Instance vs 'static'
function StaticNinja () {}
StaticNinja.message = "Hello";

const normalNinja = new StaticNinja();

// message is NOT tied to instance
Utils.assert(!(normalNinja.message === "Hello"), "STATIC: Message was applied to the StaticNinja constructor NOT the instance. Imagine a static method");
Utils.assert(StaticNinja.message === "Hello", "STATIC: When called on the constructor it's self! As a result we can see the message");


// Hypens in JS can destroy the ability to have properties 


//valid
const fontSize = element.style['font-size'];

//invalid
const fontSize = element.style.font-size;


/* 

Remember the difference between null an undefined. 
An easy short hand is a null object is of type Object and undefined is of type undefined.

*/

let a = null;
let b;

console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);