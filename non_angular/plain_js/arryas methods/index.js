/**REDUCE */
console.log("**********REDUCE*********");
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

/** REDUCE RIGHT */
console.log("**********REDUCE-RIGHT*********");
const array2 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array2.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

const result2 = array1.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]

console.log(result2);
// Expected output: 10

/** REVERSE */
/**
 * instances reverses an array in place and returns the reference to the same array,
 * the first array element now becoming the last, and the last array element becoming the first.
 * In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
 */
console.log("**********REVERSE*********");
const array3 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array3.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array3);
// Expected output: "array1:" Array ["three", "two", "one"]

/** SLICE */
/**The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end
 * (end not included) where start and end represent the index of items in that array. The original array will not be modified. */
console.log("**********SLICE*********");
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



/** SPLICE */
/**
 * The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced().
 * To access part of an array without modifying it, see slice().
 */
//splice(start, deleteCount, item1, item2, /* …, */ itemN)
console.log("**********SPLICE*********");
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//Remove 1 element at index 3
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]



/** SHIFT -- POP */
/**
 * The shift() method of Array instances removes the first element from an array and returns that removed element. 
 * This method changes the length of the array.
 * 
 * The pop() method of Array instances removes the last element from an array and returns that element. 
 * This method changes the length of the array.
 */
console.log("**********SHIFT-POP*********");
const array11 = [1, 2, 3];

const firstElement = array11.shift();

console.log(array11);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

/** KEYS */
console.log("**********KEYS*********");
const obb = {name:"John", age:22}
const arr = ["a", , "c"];
const obbKeys = Object.keys(obb);
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(obbKeys)
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]



/** AT */
/**
 * The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers.
 *  Negative integers count back from the last item in the array.
 */
console.log("**********AT*********");
const array22 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array22.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array22.at(index)}`);
// Expected output: "An index of -2 returns 130"

/** ENTRIES */
/**
 * The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
 */

console.log("**********ENTRIES*********");
const arraya = ['a', 'b', 'c'];

const iterator1 = arraya.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]


/** FLAT */
/**
 * The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */
console.log("**********FLAT*********");
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]