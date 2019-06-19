
/*

Prototyping is the ideal way to link functionality across JS objects, emulating inheritance in a JS manner.

A prototyped function will be tied to a constructor. Adding methods and variablesto the prototypical chain of an object.

When JS calls a method on an object it looks for the method. If nothing is found it looks at the objects prototype.
If the mthod is present it is ued, otherwise it will search THAT objects prototype. This will continue until a method is found or we reach the
top of the chain.

NOTE: Notice how instance variables are accessible from prototype, but the local/private is not!
Accessor function will NEED to be instance because that value is dependent on the object it is called from
*/

function Person (name, sigil) {
  let privateName = name;
  this.sigil = sigil;
  this.getName = () => { return privateName; };
}

Person.prototype.getFullName = function () {
  console.log(this.privateName + " of sigil " + this.sigil);
};

Person.prototype.setSigil = function (sigil) {
  this.sigil = sigil;
};

Person.prototype.getSigil = function () {
  return this.sigil;
};

let dante = new Person("Dante", "Sword");
let vergil = new Person("Vergil", "Raven");

dante.getFullName(); // Note how name is undefined while sigil "instance" IS accessible
console.log(dante.getName()); // To get the name we need to use an instance method/function

vergil.setSigil("The moon");
console.log(vergil.getSigil()); // We can still get and set on this instance using a prototyped method.
