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
console.log([...numbersGenerator]);

function* foo(index) {
  while (index < 100) {
    yield index;
    index++;
  }
}

const iterator = foo(0);
// wil display all generated number as un array
console.log("IT::",[...iterator]); // [0,1,2,3,......100]
for (let i = 0; i < 100; i++) {
  console.log(iterator.next().value); // if line 24 is not comment this wil display undefined 100 times
}
console.log(iterator.next().value);//if line 24 is not comment this wil display undefined 
console.log(iterator.next().value);//if line 24 is not comment this wil display undefined 
console.log(iterator.next().value);//if line 24 is not comment this wil display undefined 
// Expected output: 0

//   console.log(iterator.next().value);
