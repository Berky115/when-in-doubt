const Utils = require('./utils');

class Ninja{
    constructor(name){
      this.name = name;
      this.level = 0;
      let _privateName = 'secret code';
    }
    
    swingSword(){
      return true;
    }

    static compare(ninja1, ninja2){
      return ninja1.level - ninja2.level;
  }
}
  
  var ninja = new Ninja("Yoshi");
  
  Utils.assert(ninja instanceof Ninja, "Our ninja is a Ninja");
  Utils.assert(ninja.name === "Yoshi", "named Yoshi");
  Utils.assert(ninja.swingSword(), "and he can swing a sword");


  /*
  NOTE: The above code is functionally the same as below
  */
  
function OldNinja(name) {
  this.name = name;
  let _privateName = 'secret code';
}

OldNinja.prototype.swingSword = function() {
  return true;
};

//static equivilent
OldNinja.compare = function(ninja, ninja2){
  return ninja1.level - ninja2.level;
}


var oldNinja = new OldNinja("Vergil");
  
Utils.assert(oldNinja instanceof OldNinja, "Our ninja is an OldNinja");
Utils.assert(oldNinja.name === "Vergil", "named Yoshi");
Utils.assert(oldNinja.swingSword(), "and he can swing a sword");

  