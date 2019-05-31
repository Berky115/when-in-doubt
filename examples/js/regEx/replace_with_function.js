
const Utils = require("../utils");

function upper (all, letter) { return letter.toUpperCase(); }

Utils.assert("border-bottom-width".replace(/-(\w)/g, upper) === "borderBottomWidth", "Camel cased a hyphenated string.");

/*

Here, we provide a regex that matches any character preceded by a dash character.
 A capture in the global regex identifies the character that was matched (without the dash).
  Each time the function is called (twice in this example), it’s passed the full match string as the first argument,
  and the capture (only one for this regex) as the second argument. We aren’t interested in the rest of
  the arguments, so we didn’t specify them.

*/
