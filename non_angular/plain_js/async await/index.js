function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
let result;
// this is function declaration
async function asyncCall() {
  console.log("calling", new Date().getSeconds());
  result = await resolveAfter2Seconds();
  console.log(result, new Date().getSeconds());
  // Expected output: "resolved"
}
console.log("********************");
asyncCall();
console.log("********************");
console.log(result); // undefined and it proves that the code is not blocked by the await keyword
// ... and that because await is happening inside async function
setTimeout(() => {
  console.log(result); // OK
}, 3000);



  resolveAfter2Seconds().then((message)=>{
    console.log(message.toUpperCase())
  })

