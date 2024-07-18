const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

let returnedTarget = Object.assign(target, source); // return the target

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target); // true
returnedTarget.a = 9
console.log(target)