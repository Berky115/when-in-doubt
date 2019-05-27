/*
Generators are a new feature of es6. Similar to coroutines in python, they yield control of the exectuion threat. When returned
the use can specify different behavior. As a result generators are an excellent option when dealing with async issues.

NOTE:
Calling a generator doesn’t execute it.
Instead, it creates a new iterator that we can use to request
values from the generator. After a generator produces (or yields) a value,
it suspends its execution and waits for the next request. So in a way,
a generator works almost like a small program, a state machine
that moves between states.

*/

const Utils = require("../utils");
const path = require("path");

function * WeaponGenerator () {
  yield "Katana";
  yield "Wakizashi";
  yield "Kusarigama";
}

for (let weapon of WeaponGenerator()) {
  Utils.assert(weapon !== undefined, path.join("Weapon exists and a " + weapon));
}
