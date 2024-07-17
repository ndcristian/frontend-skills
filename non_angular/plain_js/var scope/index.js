"use strict";

const aa_const = "Im const";
var aa_var_1 = "Root";
{
  var aa_var_2 = "Block";
}

if (true) {
  var aa_var_3 = "IF Block";
}

// all this 3 variables above are global scope

const isProgramer = true;

function printAge(age) {
  // VAR is function scope
  var aa_function = "function"; 
  console.log(this)// window object in sloopy mode , undefined in strict mode 
  if (true) {
    const firstName = " Saly";
    var aa_var_4 = "FUNCTION Block";
    // debugger;
    console.log(age, firstName, isProgramer);
  }
  console.log("works only in strict mode");
  console.log(aa_var_4); // it works fine because VAR is function scope
  const arr = ()=>{
    console.log("ARROW1:::",this) // window object in sloopy mode , undefined in strict mode
  }
  arr()
}

const arr = ()=>{
  console.log("ARROW2:::",this)
}
arr()
// debugger;
printAge(11);
//console.log(aa_var_4) // throw error because is not defined
//console.log("aa_function",aa_function) // error
console.log(window);
console.log(aa_var_1, aa_var_2, aa_var_3);

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);
  return age;
}
// calcAge(1975); // error
const firstName = "Jon"
calcAge(1975);
