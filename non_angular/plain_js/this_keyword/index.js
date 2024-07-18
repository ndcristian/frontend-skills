"use strict";

/**
 * ARROW functions does not have own THIS and does not have the arguments object
 * 
 */
console.log(navigator)
console.log("***START****", this);

let person = {
  name: "John",
  surname: "Doe",
  age: 24,
  greetings: function () {
    console.log("Arguments::::", arguments)
    console.log(`Hello ${this.name} of ${this.age}`);
    console.log("THIS in methode", this);
  },
  salut: () => {
    console.log("Arguments::::", arguments) // error
    console.log(`Hello ${this.name} of ${this.age}`);
    console.log("THIS in arrow", this);
  },
  address: {
    city: "Craiova",
    showAddress: () => {
      console.log("THIS in arrow from object inside", this);
    },
  },
};
/** !!! Arrow functions can not be used in OOP creating objects because Arrow functions does not have its own THIS */
function testThis() {
  console.log("In Function::", this);
  var name = "Cris";
  const per = {
    name: "cris",
    run: () => {
      console.log("I RUN:::::", this);
    },
  };
  per.run();
  const arr = () => {
    console.log("*****", this);
  };
  arr();
}

testThis();

function whoStrict() {
  "use strict";
  console.log("Regular function use strict:", this);
}
function whoNonStrict() {
  console.log("Regular function not strict:", this);
}

const sayStrict = () => {
  "use strict";
  console.log("Arrow function STRICT", this);
};

const sayNoStrict = () => {
  console.log("Arrow function NO STRICT", this);
};

person.greetings();
person.salut();
person.address.showAddress();
testThis();
whoStrict();
whoNonStrict();
sayStrict();
sayNoStrict();

/** In case of EventListener like click a button , the THIS keyword will points to the elements itself , the button element */

console.log("*********************************************************");

var obj = {
  id: 42,
  counter: function counter() {
    console.log("THIS-1", this);
    setTimeout(() => {
      console.log("1::::", this.id); //42
    }, 1000);
  },

  counter2: function counter() {
    console.log("THIS-2", this);
    setTimeout(function () {
      console.log("2::::", this.id); //42
    }, 1000);
  },

  print: () => {
    console.log("THIS-3", this); // window
    setTimeout(() => {
      console.log("3::::", this.id); // undefined
    }, 1000);
  },

  email: () => {
    console.log("THIS-4", this); //window
    console.log("4::::", this.id); // undefined
  },
};

obj.counter();
obj.print();
obj.email();
obj.counter2();

function counter() {
  console.log("THIS-22", this); // undefined
  setTimeout(() => {
    console.log("33::::", this.id); //error
  }, 1000);
}

counter();
