"use strict";

// class Car {
//     constructor(brand, color){
//         this.brand = brand;
//         this.color = color;
//     }

//     get color(){
//         return this.color + ":color-code"
//     }
//     set color(color) {
//         this.color = color + "--"
//     }
// }

// const c = new Car("Dacia", "Alb")
// console.log(c)
// ERROR: Uncaught RangeError: Maximum call stack size exceeded

/** FIX: */

class Car2 {
  constructor(brand, color) {
    this.brand = brand;
    this._color = color;
  }

  get color() {
    return this._color + ":color-code";
  }
  set color(color) {
    this._color = color + "--";
  }
}

const c2 = new Car2("Dacia", "Alb");
c2.color = "verde";
console.log(c2.color);
console.log(c2);
