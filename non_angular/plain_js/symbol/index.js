// A “symbol” represents a unique identifier.
// A value of this type can be created using Symbol():
// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, 
// they are different values. The description is just a label that doesn’t affect anything

let id = Symbol("id");

let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log( "Direct: " + user[id] );

let user2 = { // belongs to another code
    name: "John"
  };
  
  let id2 = Symbol("id2");
  
  user2[id2] = 1;
  
  console.log( user2[id2] ); 