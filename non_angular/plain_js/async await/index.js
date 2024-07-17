function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
let result;
async function asyncCall() {
  console.log("calling", new Date().getSeconds());
  result = await resolveAfter2Seconds();
  console.log(result, new Date().getSeconds());
  // Expected output: "resolved"
}
console.log("********************");
asyncCall();
console.log("********************");
console.log(result); // undefined
setTimeout(() => {
  console.log(result); // OK
}, 3000);


// Array
const colors = ["red", "green", "blue"];
// Set
const uniqueColors = new Set(colors);
// Generator
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const numbersGenerator = generateNumbers();
console.log([...numbersGenerator])

function* foo(index) {
    while (index < 100) {
      yield index;
      index++;
    }
  }
  
  const iterator = foo(0);
  
  for(let i=0; i<100; i++){
    console.log(iterator.next().value);
  }
  console.log(iterator.next().value);
  // Expected output: 0
  
//   console.log(iterator.next().value);