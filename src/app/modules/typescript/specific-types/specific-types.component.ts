import { Component, OnInit } from '@angular/core';

enum Role {
  ROOT,
  ADMIN,
  USER,
} // default ROOT is 0, ADMIN is 1 and so on
enum Role2 {
  ROOT = 3,
  ADMIN = 4,
  USER = 9,
}
enum Role3 {
  ROOT = 'ROOT',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

type Combinable = string | number;

type TUser = {
  name: string;
  age: number;
};

type TAdmin = {
  role: string;
};

type QuesryOptions =
  | {
      table: string;
      userId: string;
    }
  | {
      table: string;
      widgetsId: string;
    }
  | {
      table: string;
      sessionId: string;
    };

type T1 =
   {
    name: string;
    age: number;
    car: string;
    fuel:string
    }
  | {
    name: string;
    age: number;
    bus: string;
    places:number
    }
  | {
    name: string;
    age: number;
    bike: string;
    speed:number
    };

type T2 = {
  firstName: string;
  age: number;
  bus: string;
};

type T3 = {
  LastName: string;
  age: number;
  car: string;
};

@Component({
  selector: 'app-specific-types',
  templateUrl: './specific-types.component.html',
  styleUrls: ['./specific-types.component.scss'],
})
export class SpecificTypesComponent implements OnInit {
  //https://www.digitalocean.com/community/tutorials/how-to-create-custom-types-in-typescript
  /* Tuples */
  role: [string, number];

  /* Union Type */
  age: number | string;
  //or useing type defined above
  age2: Combinable;

  /* Literal type */
  gender: 'male' | 'female';

  // intersection type
  admin: TUser & TAdmin;
  //Union-Typ
  normalUser: TUser | TAdmin;

  options: QuesryOptions = { table: 'sssss', userId: 'e' };

  union_t1: T1 = {age:3, name:"sadf", bus:"ssss", places:3};

  // could be one or another
  union_t2_3: T2 | T3 = {firstName:"sss", age:4, bus:"ss"}

  // have all props
  intersection: T2 & T3 = {firstName:"assa", LastName:"ssss", age:4, car:"444", bus:"sssss"}
  constructor() {}

  ngOnInit(): void {

    console.log("***",  this.union_t2_3)

    console.log(Role.ADMIN);
    console.log(Role2.ADMIN);
    console.log(Role3.ADMIN);

    this.role = ['3', 4];

    this.admin = { name: 'cris', age: 23, role: 'admin' };
    this.admin.role;
    this.normalUser = { name: 'cris', age: 23, role: 'admin' };
    // this.normalUser.name; error

    type testPrimitive = string & number;
    let testP: testPrimitive; // type of testP is never

    // testP = 3 //error

    this.age = 2;
    this.age = 's';
    const oth = new OtrherUser();
  }
}
// a class can implements a type as well as an interface
class OtrherUser implements TUser {
  name: string;
  age: number;
  private right: string;
}
