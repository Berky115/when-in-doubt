const Utils = require("./utils");

function sum () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function sumWithRestParams (...values) {
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    result += values[i];
  }
  return result;
}

Utils.assert(sum(1, 2, 3, 4, 5), "Arguments - Using the arguments 'array-LIKE' object, we can send as many params to a function as we like");
Utils.assert(sumWithRestParams(1, 2, 3, 4, 5), "Rest Params - an es6 feature that allows us to send all the arguments we want with the benefit of storing them in an array object. Highly recommend vs alternative");
