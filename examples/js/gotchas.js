const Utils = require('./utils');

function Ninja(){}

const ninja = new Ninja();

Utils.assert(ninja instanceof Ninja, "Our ninja is a Ninja! ");

Ninja.prototype = {};

Utils.assert(!(ninja instanceof Ninja), "The ninja is now not a Ninja! This demonstrates a gotch of instanceOf! Instance of checks through the prototype chain. When we set Ninja's prototype to an empty object. That effected what 'instance' we were looking at.");



