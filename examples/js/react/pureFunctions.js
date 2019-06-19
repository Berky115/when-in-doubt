/*
A pure function is a CS term for a properly encapulsated function. A pure function is categorized by ...

- Given the same input, will always return the same output
- Has no side effects (doesn't alter state)
- Doesn't rely on any external state

Example below of a pure function that doubles the inputs value.
*/

let f = (n) => n * 2;

console.log(f(5));

// impure iteration below. It relies on outside values and is thus harder to predict
let mutation = 2;
let f2 = (n) => n * mutation;

console.log(f2(5));
