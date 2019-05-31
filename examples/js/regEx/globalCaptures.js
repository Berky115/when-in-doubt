const Utils = require("../utils");

const html = "<div class='test'><b>Hello</b> <i>world!</i></div>";
const results = html.match(/<(\/?)(\w+)([^>]*?)>/);
Utils.assert(results[0] === "<div class='test'>", "The entire match.");
Utils.assert(results[1] === "", "The (missing) slash.");
Utils.assert(results[2] === "div", "The tag name.");
Utils.assert(results[3] === " class='test'", "The attributes.");

const all = html.match(/<(\/?)(\w+)([^>]*?)>/g);
Utils.assert(all[0] === "<div class='test'>", "Opening div tag.");
Utils.assert(all[1] === "<b>", "Opening b tag.");
Utils.assert(all[2] === "</b>", "Closing b tag.");
Utils.assert(all[3] === "<i>", "Opening i tag.");
Utils.assert(all[4] === "</i>", "Closing i tag.");
Utils.assert(all[5] === "</div>", "Closing div tag.");
