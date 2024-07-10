//  'use strict';
var aa_1 = "VAR"
let aa_2 = "LET"
const aa_3 = "CONST"
console.log(window)
// in strict mode duplicate parameters is not allowd
// function myF(a,a) {
//   console.log("--", a);
// }
// myF(5, 7);


// in strict mode you must declare a property before use assign it or use it
// i=1
// console.log(i)


// in strict mode this throws error but in sloppy mode it works and create a bar property in the global object
function foo() {
    bar = "I am in global scope";
  }
  foo();
  console.log(bar);
  console.log(window)