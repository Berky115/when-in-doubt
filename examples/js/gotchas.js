const Utils = require('./utils');

function Ninja(){}

const ninja = new Ninja();

Utils.assert(ninja instanceof Ninja, "INSTANCEOF: Our ninja is a Ninja! ");

Ninja.prototype = {};

Utils.assert(!(ninja instanceof Ninja), "INSTANCEOF: The ninja is now not a Ninja! This demonstrates a gotch of instanceOf! Instance of checks through the prototype chain. When we set Ninja's prototype to an empty object. That effected what 'instance' we were looking at.");


// Instance vs 'static'
function StaticNinja(){}
StaticNinja.message = "Hello";

const normmalNinja = new StaticNinja();

const a1 = normmalNinja.message;
const a2 = StaticNinja.message;

//message is NOT tied to instance
Utils.assert(!(a1==='Hello'),"STATIC: Message was applied to the StaticNinja constructor NOT the instance. Imagine a static method");
Utils.assert(a2 === 'Hello', "STATIC: When called on the constructor it's self we can see the message")