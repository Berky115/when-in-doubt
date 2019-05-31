
/*

Within square brackets, a hyphen (-) between two characters can be used to indicate a
range of characters, where the ordering is determined by the character’s Unicode number.
 Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so
 [0-9] covers all of them and matches any digit

*/

console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

/*

\d Any digit character
\w An alphanumeric character (“word character”)
\s Any whitespace character (space, tab, newline, and similar)
\D A character that is not a digit
\W A nonalphanumeric character
\S A nonwhitespace character
. Any character except for newline

*/

console.log("-_-_-_-_-_-_-_-_-_ Pattern match");
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

let drewTest = /\w\w\w/; // 3 digit value
console.log("++++++++++++++++++++ 3 characters");
console.log(drewTest.test("cat"));
console.log(drewTest.test("ct"));

let drewTestIsAlphabetic = /[\W]/;

console.log("------------------- has only letters");
console.log(drewTestIsAlphabetic.test("Yo!"));
console.log(drewTestIsAlphabetic.test("Berky115"));
console.log(drewTestIsAlphabetic.test("115"));

/*
To invert a set of characters—that is, to express that you want to
match any character except the ones in the set—you can write a caret
 (^) character after the opening bracket.

*/

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110")); // does it have anything OTHER then what is specified ?
// → false
console.log(notBinary.test("1100100010200110"));
// → true
