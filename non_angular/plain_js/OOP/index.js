"use strict";

/** !!!!!!
 - Classes are not hoisted 
 - Classes are executed in strinct mode

 */

/** *****************ES5 approach********** */
const Person = function (firstName, birthYear) {
  console.log("THIS IN FUNTION CREATED WITH NEW", this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never declare methods in the constructor object
  // because all the obejects created from this will carry out this method
  //   => performance issue
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// is not necesary to call this first. It works even if you call it like in line 25
new Person("John", 1999);

// what that means?
// 1. New {} is created
// 2. function is called and THIS={} and that is possible because we call the function with new keyword
// 3. {} is linked to prototype, the __proto__ is added to {} and link it to Person.prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 8888);
const jack = new Person("Jack", 8888);
console.log("C-F",matilda, jack);
console.log(jack instanceof Person);

/** PROTOTYPES */

// add method to ower Person
Person.prototype.calcAge = function () {
  console.log("CalcAge:::",2037 - this.birthYear);
};
console.log(Person.prototype);
// All objects created with Person constructor will get access to calcAge through PROTOTYPE INHERITANCE
matilda.calcAge();
jack.calcAge();

// add properties to prototype
Person.prototype.species = "Homo Sapience";
console.log(matilda.species);
console.log(matilda.hasOwnProperty("firstName")); // true
console.log(matilda.hasOwnProperty("species")); // false because is inherited from prototype
Person.prototype.calcAge();

// PROTOTYPE CHAIN

console.log("CHAIN-1:::",jack.__proto__); // jack prototype
console.log("CHAIN-2:::",jack.__proto__.__proto__); // Object prototype
console.log("CHAIN-3:::",jack.__proto__.__proto__.__proto__); // null

console.dir(jack); // is very util when to display object
// Ex when use quesrySelector and return the html code you can use console.dir to display the as object
console.dir((x) => (x = 1));
console.log(jack);



/****************************************************** */
/*********ES6 Classes**************** */
console.log("************************************ ");
console.log("*********ES6 Classes**************** ");

// this is just another implementation of the abouve approach

// class expresion
const PersonExpesion = class {};

// class declaration
class PersonES6 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  // GETTERS ans SETTERS
  // they are mothods which set a property
  get location() {
    return "Craiova";
  }

  // this methoid is called every time firstName is changed. Don't need to call it from code
  // this is the reason we introduced _firstName otherwise error: Maximum call stack size exceeded
  set firstName(name) {
    console.log(name);
    if (name.includes(" ")) {
      this._firstName = name;
    } else {
      this._firstName = "Incomplet name";
    }
  }
  get firstName() {
    return this._firstName;
  }

  //create a static method
  static hey() {
    console.log(":STATIC::", this);
  }
}

const jes = new PersonES6("Jessica M", 2343);
console.log(jes);
jes.calcAge();

console.log(jes.location);

// STATIC METHODS

PersonES6.stay = function () {
  console.log(this);
  console.log("I stop");
};

PersonES6.stay();
PersonES6.hey();

/****************************************************** */
/*********Object.create()**************** */

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steve = Object.create(PersonProto);
steve.name = "Steven";
steve.birthYear = 1234;

/****************************************************** */
/*********INHERITANCE using constructor function**************** */

const PersonIh = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
PersonIh.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;

  // instead of repeting this line we can call like this for inheritance
  PersonIh.call(this, firstName, birthYear);
  // use call because we dont call the PersonIh with the new keyword which link this to the curent object
  // so, we have ti define THIS manually using call()
  this.course = course;
};

// create inheritance from PersonIh
// this will link prototypes
Student.prototype = Object.create(PersonIh.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi I am student ${this.firstName} learning..`, this.course);
};
// reassign the initial constructor to Student
// comment out this line and check the results of line 178
Student.prototype.constructor = Student;
const mike = new Student("Mike", 1235, "Math");

mike.introduce();
mike.calcAge(); // work due to inheritance
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.dir(Student.prototype.constructor);

/****************************************************** */
/*********INHERITANCE using function class**************** */

class PersonG {
  #privateKey = 123;
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // convention to mark it as protected
    this._familyKey = "Key";
  }
  calcAge() {
    console.log(1000 - this.birthYear);
  }
}

class StudentCl extends PersonG {
  constructor(firstName, birthYear, course) {
    // need to be first
    super(firstName, birthYear);
    this.course = course;
  }
  // override the methode from parent class without affect the parent object
  calcAge() {
    console.log(0 - this.birthYear);
  }
}

const martha = new StudentCl("Martha", 500, "English");
const mihai = new PersonG("Mihai", 800, "Geo")
console.log("Marta:::",martha);
console.log("Mihai:::",mihai);

martha.calcAge();
mihai.calcAge();

console.log(navigator.language);
// throws error
// console.log(mihai.#privateKey);

PersonG.prototype.fullName = "asdfasdf"
// mihai.fullName = "wertwert"
console.log(mihai.__proto__)