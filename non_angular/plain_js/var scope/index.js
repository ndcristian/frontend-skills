"use strict";

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
  if (true) {
    const firstName = " Saly";
    var aa_var_4 = "FUNCTION Block";
    debugger;
    console.log(age, firstName, isProgramer);
  }
  console.log(aa_var_4) // it works fine because VAR is function scope
}

// debugger;
printAge(11);
console.log(aa_var_4) // throw error because is not defined
console.log(window);
console.log(aa_var_1, aa_var_2, aa_var_3);
