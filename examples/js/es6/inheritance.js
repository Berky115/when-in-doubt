const Utils = require("../utils");

/*
Here we can see inheritance simulated through the class , extends and super keywords.

extends - Sets prototype to Person for the Ninja class
super - super is used to pass down the name to the Person Constructor.

NOTE: While useful for those coming from traditionally OO languages, these keywords are ultimately
a style of using es6/js. Many would argue that following these conventions without understanding the implications
under the hood may end up confusing themselves. Still, if you know the rules this can be a convenient way to develope.

*/

class Person {
  constructor (name) {
    this.name = name;
  }

  dance () {
    return true;
  }
}

class Ninja extends Person {
  constructor (name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  wieldWeapon () {
    return true;
  }
}

var person = new Person("Dante");

Utils.assert(person instanceof Person, "A person's a person");
Utils.assert(person.dance(), "A person can dance.");
Utils.assert(person.name === "Dante", "We can call it by name.");
Utils.assert(!(person instanceof Ninja), "But it's not a Ninja");
Utils.assert(!("wieldWeapon" in person), "And it cannot wield a weapon");

var ninja = new Ninja("Yoshi", "Wakizashi");
Utils.assert(ninja instanceof Ninja, "A ninja's a ninja");
Utils.assert(ninja.wieldWeapon(), "That can wield a weapon");
Utils.assert(ninja instanceof Person, "But it's also a person"); // NOTE: Configurable. See configurable properties
Utils.assert(ninja.name === "Yoshi", "That has a name");
Utils.assert(ninja.dance(), "And enjoys dancing");
