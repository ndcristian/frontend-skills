"use strict";

console.log("***START****", this);

let person = {
  name: "John",
  surname: "Doe",
  age: 24,
  greetings: function () {
    console.log(`Hello ${this.name} of ${this.age}`);
    console.log("THIS in methode", this);
  },
  salut: () => {
    console.log(`Hello ${this.name} of ${this.age}`);
    console.log("THIS in arrow", this);
  },
  address: {
    city: "Craiova",
    showAddress: ()=>{
        console.log("THIS in arrow from object inside", this);
    }
  },
};
/** !!! Arrow functions can not be used in OOP creating objects because Arrow functions does not have its own THIS */
function testThis(){
    console.log("In Function::", this)
    var name = "Cris"
    const per = {
        name: "cris",
        run: ()=>{
            console.log("I RUN:::::", this)
        }
    }
    per.run()
    const arr = ()=>{
        console.log("*****", this)
    }
    arr();
}


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
