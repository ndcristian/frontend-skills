// "use strict";

console.log("***START****")

let person = {
    name: "John",
    surname: "Doe",
    age:24,
    greetings: function(){
        console.log(`Hello ${this.name} of ${this.age}`)
        console.log("THIS in methode",this)
    },
    salut:()=>{
        console.log(`Hello ${this.name} of ${this.age}`)
        console.log("THIS in arrow",this)
    }
}

function whoStrict(){
    "use strict";
    console.log("Regular function use strict:", this)
}
function whoNonStrict(){
    console.log("Regular function not strict:", this)
}

const sayStrict = ()=>{
    "use strict";
    console.log("Arrow function STRICT", this)
}

const sayNoStrict = ()=>{
    console.log("Arrow function NO STRICT", this)
}

person.greetings();
person.salut();
whoStrict();
whoNonStrict();
sayStrict();
sayNoStrict();