

class Person {
  lastName;
  town = "Craiova"
  constructor(name, bithday) {
    this.name = name;
    this.birthday = bithday;
  }

  calcAge() {
    console.log("Calculating age....");
  }
}

console.log(Person.prototype);
console.log(Person.hasOwnProperty('town'));
Person.prototype.spec = "H"
const john = new Person("john", 1975);
const ela = new Person("ela", 1980);
ela.phone = 123
ela.__proto__.address = "Craiova"

console.log(john)
console.log(ela)
console.log('address' in john) //true
console.log(john.hasOwnProperty('address' )) //false
console.log(john.address) // is available because even if 'address' is not available in john object , the javascript will look for it in john prototype

console.log(ela.hasOwnProperty('town'));

console.log(Person.prototype.isPrototypeOf(john)) //true
console.log(Person.prototype.isPrototypeOf(ela))//true
console.log(ela.__proto__.isPrototypeOf(john)) //true
console.log(ela.__proto__ === john.__proto__) //true
console.log(Person.prototype.isPrototypeOf(Person)) //false
console.log(Person.prototype.isPrototypeOf(Object.prototype)) //false
console.log(Person.prototype.__proto__===Object.prototype) //true