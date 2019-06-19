/*

A polyfill is a browser fallback. If a browser doesn’t support a particular functionality,
we provide our own implementation. For example, the Mozilla Developer Network (MDN) provides
polyfills for a wide range of ES6 functionality. Among other things, this includes the JavaScript
implementation of the Array.prototype.find method (http://mng.bz/d9lU), as shown in the following listing.

*/


// real world example
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
      if (this === null) {
        throw new TypeError('find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;
  
      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    };
  }
  
  
  // Detection outline

  if (typeof document !== "undefined" &&
    document.addEventListener &&
    document.querySelector &&
    document.querySelectorAll) {
  // We have enough of an API to work with to build our application
}
else {
  // Provide Fallback
}
  