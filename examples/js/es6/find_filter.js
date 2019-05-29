const Utils = require("../utils");
/*

Find : A handy function for returning an element if found in an array

Filter: Return a new array with multiple items based on passed in param

other array specific:
*/

const ninjas = [
    {name: "Yagyu", weapon: "shuriken"},
    {name: "Yoshi" },
    {name: "Kuma", weapon: "wakizashi"}
  ];
  
  const ninjaWithWakizashi = ninjas.find(ninja => {
    return ninja.weapon === "wakizashi";
  });
  
  Utils.assert(ninjaWithWakizashi.name === "Kuma"
      && ninjaWithWakizashi.weapon === "wakizashi", 
      "Kuma is wielding a wakizashi");
  
  const ninjaWithKatana = ninjas.find(ninja => {
    return ninja.weapon === "katana";
  });
  
  Utils.assert(ninjaWithKatana === undefined,
        "We couldn't find a ninja that wields a katana");
  
  const armedNinjas = ninjas.filter(ninja => "weapon" in ninja);
  
  Utils.assert(armedNinjas.length === 2, "There are two armed ninjas foudn using filter:");
  Utils.assert(armedNinjas[0].name === "Yagyu"
      && armedNinjas[1].name === "Kuma", "Yagyu and Kuma");
  
  
  