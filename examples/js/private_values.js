/*
We can create private variables in JS in the manner below.

Note: Advantages to private variables are...
- Limited access, created an design path for future developments
- Easy means of tracking changes 'logging on setters and getters. Due to only means of access
- Data can still be manipulated.
- We can force checks onto a value. Ex: is it a number? is it within range? Is it valid by some constraint?

*/

const Utils = require("./utils");
const path = require("path");

function Ninja (lev) {
  let skillLevel = lev;

  this.getSkillLevel = () => skillLevel;

  this.setSlillLevel = value => {
    console.log(path.join("skill level changed from ", skillLevel.toString(), " to ", value.toString()));
    skillLevel = value;
  };
};
const ninja = new Ninja(1);
ninja.setSlillLevel(100);
Utils.assert(ninja.getSkillLevel() === 100, "The ninja is level 100!");

/*
    Alternatively we can use object literals paired with es5 syntax as seen below

*/

const ninjaCollection = {
  ninjas: ["Yoshi", "Kuma", "Hattori"],
  get firstNinja () {
    console.log("Getting firstNinja");
    return this.ninjas[0];
  },
  set firstNinja (value) {
    console.log("Setting firstNinja");
    this.ninjas[0] = value;
  }
};

Utils.assert(ninjaCollection.firstNinja === "Yoshi",
  "Yoshi is the first ninja");

ninjaCollection.firstNinja = "Hachi";

Utils.assert(ninjaCollection.firstNinja === "Hachi" &&
          ninjaCollection.ninjas[0] === "Hachi",
"Now Hachi is the first ninja");

/*

This syntax can also be used in es6 classes, as seen below.

*/

class DemonCollection {
  constructor () {
    this.demons = ["Dante", "Nero", "Vergil"];
  }

  get firstDemon () {
    console.log("Getting first demon");
    return this.demons[0];
  }

  set firstDemon (value) {
    console.log("Setting demon");
    this.demons[0] = value;
  }
}

const demonCollection = new DemonCollection();

Utils.assert(demonCollection.firstDemon === "Dante" && demonCollection.demons[0] === "Dante", "First demon is Dante");

/*

We can even use .defineProperty to apply the get /set keyworks to functional constrcutors like so...

*/

function Ghost () {
  let _ghostLevel = 0;

  Object.defineProperty(this, "ghostLevel", {
    get: () => {
      console.log("Get method called");
      return _ghostLevel;
    },
    set: (value) => {
      console.log(path.join("_ghostLevel changed from ", _ghostLevel.toString(), " to ", value.toString()));
      _ghostLevel = value;
    }
  });
}

const ghost = new Ghost();
Utils.assert(typeof ghost._ghostLevel === "undefined", "We cannot access a 'private property");
Utils.assert(ghost.ghostLevel === 0, "The getter/setter works");

ghost.ghostLevel = 15;
Utils.assert(ghost.ghostLevel === 15, "The value was updated to 15");

/*

Note: unlike getters and setters specified on object literals and classes,
the get and set methods defined through Object.defineProperty are created
in the same scope as the “private” skillLevel variable. Both methods create
a closure around the private variable, and we can access that private variable
only through these two methods.

*/

/*

Note: The get/set syntax is very flexible. It does NOT have to be tied to returning and setting a single variable. Example below...

*/

function HeroOfTime () {
  let name = "Link";
  let weapon = "Master Sword";

  Object.defineProperty(this, "title", {
    get: () => { return name + " wielder of the " + weapon; },
    set: (value) => {
      const segments = value.split(" ");
      name = segments[0];
      weapon = segments[1];
    }
  });

  Object.defineProperty(this, "name", {
    get: () => { return name; },
    set: (value) => {
      name = value;
    }
  });

  Object.defineProperty(this, "weapon", {
    get: () => { return weapon; },
    set: (value) => {
      weapon = value;
    }
  });
}

let link = new HeroOfTime();

Utils.assert(link.title === "Link wielder of the Master Sword", "Full title given");
link.title = "Midna wolf";
Utils.assert(link.title === "Midna wielder of the wolf", "Full title given");

link.name = "Dante";
link.weapon = "Sparda!";

Utils.assert(link.title === "Dante wielder of the Sparda!", "Name changed using common get/set");
