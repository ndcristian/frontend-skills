//!!!! promis is executetd event there is not a subscriber , is nothing which call THEN() method
// comment out the .then() call in lines 47-55 and you will see at every second a new message in console

//!!!! and this is the main difference between Promis an Observable
// Observable is executed only if something subscribe to it

let p = new Promise((resolve1, reject1) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve1("success");
  } else {
    reject1("Failed");
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
console.log("Before call", p2);

// this message wil be displayed last because it is a promise
p.then((message) => {
  console.log("This is THEN message " + message);
}).catch((message) => {
  console.log("This is CATCH message " + message);
});
console.log("After call");

Promise.all([p, p2]).then((message) => {
  console.log("This is ALL message ");
  console.log(message);
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
