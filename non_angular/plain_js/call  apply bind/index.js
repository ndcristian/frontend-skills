///////////////////////////////////////

/**
 * ALL this methods allow us to manualy set the this keyword
 */

// The CALL and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// store the function from lufthansa into a new variable to use it whenever we want. Avoid duplication
const book = lufthansa.book;

// Does NOT work because book is just a regular function
// AND IN REGULAR FUNCTIONS THIS KEYWORD POINTS TO UNDEFINED , AT LEAST IN STRICT MODE. IN SLOPY MODE IT POINTS TO WINDOW OBJECT
try {
  book(23, "Sarah Williams");
} catch (err) {
  // throw new Error(err)
  console.error("this error is because this keyword is undefined::", err);
}

// ===>  to fix this error, we have to use CALL() methode
// just because in javascript functions are objecte and objects have this CALL() method, we can call the CALL() methode to the book function
// Call method in eurowings context , that means the THIS points to eurowings
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

// Call method in lufthansa context , that means the THIS points to lufthansa
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// APPLY method does the same as CALL but it will receive an array as arguments instead arguments like in CALL method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
// we cal use CALL but with spread operator
book.call(swiss, ...flightData);

///////////////////////////////////////
// The BIND Method like CALL allows us to manualy set the THIS keyword
// the diference is that BIND does not call the function and it will return a function where THIS keyword is bound
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings); // a new function is created where THIS points to eurowings
const bookLH = book.bind(lufthansa); // a new function is created where THIS points to lufthansa
const bookLX = book.bind(swiss); // a new function is created where THIS points to swiss

bookEW(23, "Steven Williams");

// we can set the THIS keyword but we can also preset other variables that functions can use by default
// here we create a function dedicated to flight number 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // because this function is called when a button is clicked,  here THIS points to the button elements

  this.planes++;
  console.log(this.planes); // output: NaN
};
// here works fine because lufthansa is the THIS keyword
// lufthansa.buyPlane();

// attach this funtion to a an event listner
// not work because the THIS keyword is the button which is clicked and trigger the function
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane);
// TO FIX , we have to use BIND methode ( NOT CALL because CALL immediately call the method)
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

///////////////////////////////////////
