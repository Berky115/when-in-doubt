 /*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

This can be done with the following syntax:
 - function(){}();
 - (function(){})();
 */

function myFunctionDeclaration(){
    function innerFunction() {console.log('hello')}
  }
  
  let myFunc = function(){};
  myFunc(function(){
    return function(){console.log('hello')};
  });

  (function namedFunctionExpression () {
  })();
  
  +function(){console.log('An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.')}();
  -function(){console.log('This can be done with the following syntax:')}();
  !function(){console.log('function(){}();')}();
  ~function(){console.log('(function(){})();')}();
  