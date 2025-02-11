"use strict";

/*STRICT MODE is default in the follow situations: 
- when define a class: class MyClass {}
- when export a module: export module MyModule 
- when import js file in index.html and set type = "module": <script src="script.js" type="module"></script>
*/


var aa_1 = "VAR";
let aa_2 = "LET";
const aa_3 = "CONST";
console.log(window.aa_1); // output: VAR
console.log(window.aa_2); // output: undefined
console.log(window.aa_3); // output: undefined


let variable = "value"

vriable = 10

console.log(variable, window.vriable)
/*output:
- in sloppy mode will be value and 10 and no error in console
- in strict mode will  throw an error
*/

// hoisting is not affected by strict mode
console.log("Hoisting", hoistingVar);
var hoistingVar = "Hoisting var";
//!!!!!!
// in strict mode functions are block scope.
// If a function is declared inside block it can not be accessale from outside the bloc
// in sloppy mode is function scope .
// If a function is declared inside block it can  be accessale from outside the bloc

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
  // "use strict" // we can define strict mode at the function level
  bar = "I am in global scope";
  // this is undefined in strict mode but in floppy mode it is the global object
  console.log("THIS::", this);
}
foo();
console.log(bar);
console.log(window);

// in strict mode throw error because it is not alloed to have 2 arguments with the same name
// in sloppy mode works without throwing error
function test(a, a, c) {
  a = 10;
  // in sloppy mode mutating a leads to change the argument a
  // in strict mode changing a does not change the argument a
  console.lof(a, c, arguments[0], arguments[2]);
}
