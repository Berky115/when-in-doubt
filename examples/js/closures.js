const Utils = require("./utils");

let makeCounter = function (value) {
  let privatecounter = value;
  function changeBy (val) {
    privatecounter += val;
  };
  function setCounter (val) {
    privatecounter = val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privatecounter;
    },
    setValue: function (val) {
      return setCounter(val);
    },
    sums: function (x) {
      return function callBack (y) {
        return x + y;
      };
    }
  };
};

let counter = makeCounter(15);
Utils.assert(counter.value() === 15, "A counter object is made using a constructor");
counter.increment();
Utils.assert(counter.value() === 16, "We can access 'private' values using a closure. The values are stored within but can be access from out of the scope");
counter.setValue(115);
Utils.assert(counter.value() === 115, "A common example of this might be getters/setters for private variables");
let callMe = counter.sums(10);
Utils.assert(callMe(5) === 15, "We can also use closures to set callback functions");
