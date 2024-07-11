let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
});
let p2 = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("bineee");
  } else {
    reject("eroareeee");
  }
});
console.log("Before call", p);

// this message wil be displayed last because it is a promise
p.then((message) => {
  console.log("This is THEN message " + message);
}).catch((message) => {
  console.log("This is CATCH message " + message);
});
console.log("After call");

Promise.all([p, p2]).then((message)=>{
    console.log("This is ALL message " )
    console.log(  message)
});
Promise.race([p, p2]).then((message)=>{
    console.log("This is ALL message " )
    console.log(  message)
});