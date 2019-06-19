/*

Declarative programming: is a programming paradigm that expresses 
the logic of a computation without describing its control flow.

Imperative programming is a programming paradigm that uses statements
 that change a program’s state.

*/

//declarative programming: 
let arr3 = [1,2,3,4,5]
let arr4 = arr3.map((val) => val * 2)
console.log(arr4)

//imperative programming:
let arr = [1,2,3,4,5]
let arr2 = []
for(let i = 0 ; i < arr.length; i++){
    arr2[i] = arr[i] * 2;
}
console.log(arr2);


