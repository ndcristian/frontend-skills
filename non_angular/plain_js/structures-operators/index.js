"use strict";
 /*Destructuring arrays */
 const [a, b, c] = [1, 2, 3];
 console.log(a, b, c);
 /*
 In this case k will be undefined
 to avoid this , we can assign a default value in case of undefined
 */
 const [x = 1, y = 1, z = 1, k = 1] = [1, 2, 3];
 console.log(a, b, c, k);

 /*Skiping elements*/
 const [aa, , bb] = [1, 2, 3];
 console.log(aa, bb);

 /*Destructuring objects */
 const person = {
   name: 'Mark',
   age: 28,
   city: 'New York',
 };

 const { age, city } = person;
 console.log(age, city);

 /*If we want to change the property name into another one */
 const { age: personAge, location: personLocation } = person;
 console.log(personAge, personLocation);

 /*Destructuring strings */
 const name = 'Cristi';
 const [...arrName] = name;
 console.log(arrName);

 //OR
 const arrOfName = [...'Cristi'];
 console.log(arrOfName);

 /*
 SPREAD operator
 is on the RIGHT side of the equal =
 */
 const newArr = [1, 2, ...[3, 4]];

 /*
 REST operator
 is on the LEFT side of the equal =
 */
 const [w, q, ...others] = [1, 2, 3, 4, 5, 6];
 console.log(others);
 /*
 REST parameters */
 const add = function (...numbers) {
   console.log(numbers);
 };

 add(1, 2);
 add(1, 2, 3, 4, 5);
 add(2, 3, 4);

 /* Short Circuiting */

 /* OR Operator - works with falsy values like 0, undefined,'', null, false
 returns the first truth value of the chain
 */
 console.log(2 || 'John');
 /*Retuns 2 */
 console.log('' || 'John');
 /*Retuns John */
 console.log(true || 'John');
 /*Retuns true */
 console.log(undefined || 'John');
 /*Retuns John */
 console.log(0 || 'John');
 /*Retuns John because 0 is evaluated as false*/
 console.log(undefined || null);
 /*Retuns null even if all params ar evaluated as fals, the last one will be returned */

 /* AND Operator - works with falsy and truthy values like 0, undefined,'', null, false
 returns the first false value of the chain
 works in an oposite way as OR
 */
 console.log(0 && 'John');
 /*Retuns 0 because 0 is evaluated as false*/
 console.log(2 && 'John');
 /*Retuns John because all args are true and the last one will be returned */

 /*Nullish operator ??
 Works with null and undefined NOT with 0 and ''
 */
 console.log(0 ?? 10);
 /* Returns 0  */
 console.log(undefined ?? 10);
 /* Returns 10  */

 /* Logical  assignment */

 const rest1  = { name: 'Rest1', location: 'Craiova' };
 const rest2  = { name: 'Rest1', country: 'Romania' };

 // with Short Circuiting
 rest2.location = rest1.location || 'Bucuresti';
 //OR...
 rest2.location ||= 'Bucuresti';

 //OR this works only if undefined or null
 rest2.location ??= 'Bucuresti';

 // Non-null assertion operator
//  type Employee = {
//    name: string;
//    country: string;
//  };
//  let employee: Employee | undefined; // 👈️ could be undefined

//  employee!.country = 'Germany';
