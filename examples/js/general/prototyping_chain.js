const Utils = require("./utils");

/*
This is an example of a prototypical chan. The attributes of each object are linked to each other through
setPrototypeOf();

In this example, Nero's prototype is set to Dante. This means when we look for 'DT' the Nero object has no DT, so the program looks
up Nero's prototype chain to Dante. Dante HAS 'DT' which means Nero can access it now too.

Later we set Dante's prototype to Vergil. This means that When we look to Nero for Teleport the chain

Scans Nero and finds no Teleport, so we check Nero's prototype
Scans Dante and finnds no Teleport, so we check Dante's prototype.
Scans Vergil and finds Teleport.

As a result, Nero now has acess to Teleport through Dante's prototype.

*/

const Dante = { DT: true };
const Nero = { DevilBringer: true };
const Vergil = { teleport: true };

Utils.assert("DT" in Dante, "Dante has DT");
Utils.assert(!("DT" in Nero), "Nero has no DT");
Utils.assert(!("teleport" in Nero), "Nero has no Teleport");
Object.setPrototypeOf(Nero, Dante);

Utils.assert("DevilBringer" in Nero, "Nero now has DevilBringer");

Object.setPrototypeOf(Dante, Vergil);

Utils.assert("teleport" in Nero, "Now Nero can teleport");
