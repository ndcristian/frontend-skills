//!!!! promis is executetd event there is not a subscriber , is nothing which call THEN() method
// comment out the .then() call in lines 47-55 and you will see at every second a new message in console

//!!!! and this is the main difference between Promis an Observable
// Observable is executed only if something subscribe to it

let p = new Promise((resolve1, reject1) => {
  console.log("PROMIS P IS EXECUTED")
  const second = new Date().getSeconds();
  let a = 1 + 1;
  if (a === 2) {
    resolve1("success at: " + second);
  } else {
    reject1("Failed at: " + second);
  }
});
let p2 = new Promise((resolve, reject) => {
  console.log("PROMIS P-2 IS EXECUTED")
  let a = 1 + 1;
  if (a === 2) {
    resolve("bineee");
  } else {
    reject("eroareeee");
  }
});
console.log("Before call", p2);

// this message will be displayed last because it is a promise
p.then((message) => {
  console.log(message.toUpperCase())
  console.log("This is first P message " + message);
}).catch((message) => {
  console.log("This is CATCH message " + message);
});
console.log("After call");

setTimeout(()=>{
  p.then((message)=>{
    console.log("5 secconds later P message" + message);
  })
},5000)
/*Expect output: the second will be consoled as the first call
-- proves that the promis is executed when it is created and return the same value over time
-- whereas Observer is executed every time when subcribe() method is called and generate different results
*/

Promise.all([p, p2]).then((message) => {
  console.log("This is ALL message ");
  console.log(message);
  /* Expected output: ['success', 'bineee'] */
});
Promise.race([p, p2]).then((message) => {
  console.log("This is RACE message ");
  console.log(message);
});

let p3 = new Promise((resolve, reject) => {
  const second = new Date().getSeconds();
  setInterval(() => {
    const second = new Date().getSeconds();
    console.log("******", second);
    if (second < 60) {
      resolve(`P3 second is: ${second}`);
    } else {
      reject(`Reject: ${second} `);
    }
  }, 1000);
});

//first use
p3.then((response) => {
  console.log(`first use: ${response}`);
})
  .catch((err) => {
    console.log(`Catch ${err}`);
  })
  .finally((f) => {
    console.log("Finaly");
  });
// second use: and the result is the same as the first use even the second is 5 greater than first use
setTimeout(() => {
  p3.then((response) => {
    console.log(`second use: ${response}`);
  });
}, 5000);
