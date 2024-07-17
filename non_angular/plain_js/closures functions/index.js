///////////////////////////////////////
/**
 * 
 *  The CLOSURES are not specifically created . It happens in some situations and we have to recognize those situations 
 * DEFINITION: Variable environment is attached to a function , exactly as it was at the time and place the function was created
 * OR: A function has access to variable envirnment of the execution context in which it was created even after that execution context is gone
 * 
 * O functie poate pastra contextul in care a fost creat
 * 
 */
// Closures
const secureBooking = function () {
    let passengerCount = 0;
  
    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
  
  const booker = secureBooking();
  
  booker();
  booker();
  booker();
  
  console.dir(booker);
  
  //OR this one
  
function secureBooking2() {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
}

secureBooking2()();//1 passengers
secureBooking2()();//2 passengers
secureBooking2()();//3 passengers


  ///////////////////////////////////////
  // More Closure Examples
  // Example 1
  let f;
  
  const g = function () {
    const a = 23;
    f = function () {
      console.log(a * 2);
    };
  };
  
  const h = function () {
    const b = 777;
    f = function () {
      console.log(b * 2);
    };
  };
  
  g();// after this function call the f function is defined
  f(); // and here we can call it
  console.dir(f);
  
  // Re-assigning f function
  h();
  f();
  console.dir(f);
  
  // Example 2
  const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
  
    setTimeout(function () {
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
  
    console.log(`Will start boarding in ${wait} seconds`);
    
  };
  
  const perGroup = 1000;
  boardPassengers(180, 3);
  


