/*
Apply, Call and Bind are all ways of tying a particular scope to a method. In the examples below you will see that...

A function is involked using one of the above mentioned methods.

Apply - Will take an object and an array of values to apply to. These will be used as parameters of the function

Call - Will take an object and a series of values to apply to said object. The arguments after the object will all be used as parameters.

Bind - Will create a new function that, when called, has its this keyword set to the provided value, with a given sequence
of arguments preceding any provided when the new function is called.

*/

const Utils = require("./utils");

function juggle () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

let ninja1 = {};
let ninja2 = {};
let ninja3 = {};

let boundNinja = juggle.bind(ninja3);

Utils.assert(juggle.apply(ninja1, [1, 2, 3, 4, 5]) === 15, "Apply - Will take an object and an array of values to apply to. These will be used as parameters of the function ");
Utils.assert(juggle.call(ninja2, 1, 2, 3, 4, 5) === 15, "Call - Will take an object and a series of values to apply to said object. The arguments after the object will all be used as parameters.");
Utils.assert(boundNinja(1, 2, 3, 4, 5) === 15, "Bind - Will create a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.");
