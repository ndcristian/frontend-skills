/** 1 */
const oo = {
    name:"Ion",
    age:22
}

for(let k in oo){
    console.log(k)// name , age
}


/** 2 */
const object1 = {
    a: 'somestring',
    b: 42,
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // Expected output:
  // "a: somestring"
  // "b: 42"