const Utils = require('./utils');

var ninja = {};
ninja.name = "Yoshi";
ninja.weapon = "kusarigama";

Object.defineProperty(ninja, "sneaky", {
  configurable: false, //If set to true, the property’s descriptor can be changed and the property can be deleted. If set to false, we can do neither of these things.
  enumerable: false, //If set to true, the property shows up during a for-in loop over the object’s properties (we’ll get to the for-in loop soon).
  value: true, //Specifies the value of the property. Defaults to undefined.
  writable: true, //If set to true, the property value can be changed by using an assignment.
   //  get: function(){}, Defines the getter function, which will be called when we access the property. Can’t be defined in conjunction with value and writable.
  //  set: function(){}, Defines the setter function, which will be called whenever an assignment is made to the property. Also can’t be defined in conjunction with value and writable.
});

Utils.assert("sneaky" in ninja, "We can access the new property");

for(let prop in ninja){
    Utils.assert(prop !== undefined, "An enumerated property: " + prop);
}