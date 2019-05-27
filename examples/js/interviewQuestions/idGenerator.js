/*

Write a function that generates new id's when called

*/

const Utils = require("../utils");

function * IdGenerator () {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idIterator = IdGenerator();

const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value };

Utils.assert(ninja1.id === 1, "id 1");
Utils.assert(ninja2.id === 2, "id 2");
Utils.assert(ninja3.id === 3, "id 3");
