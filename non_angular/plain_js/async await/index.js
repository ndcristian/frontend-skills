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
