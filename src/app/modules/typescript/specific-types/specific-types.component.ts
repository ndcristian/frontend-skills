import { Component, OnInit } from '@angular/core';

// function type
type AddFn = (a: number, b: number) => number;

let myFn: AddFn;

myFn = (a: number, b: number) => {
  return a + b;
};

// Now the same but using interface
interface IAddFn {
  (a: number, b: number): number;
}

let imyFn: IAddFn;
imyFn = (a: number, b: number) => {
  return a + b;
};

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

// can add methode to types
type X = {
  prop1: string;
  calc: AddFn;
};

let z: X;
z = {
  prop1: '',
  calc: (a: number, b: number) => {
    return a;
  },
};

console.log(z.calc(4, 4));

type TUser = {
  name: string;
  age: number;
};

type TAdmin = {
  role: string;
};

type QueryOptions =
  | {
      table: 'user';
      userId: string;
    }
  | {
      table: 'sales';
      salesId: string;
    }
  | {
      table: 'session';
      sessionId: string;
    };

type T1 =
  | {
      name: string;
      age: number;
      car: string;
      fuel: string;
    }
  | {
      name: string;
      age: number;
      bus: string;
      places: number;
    }
  | {
      name: string;
      age: number;
      bike: string;
      speed: number;
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

  options: QueryOptions = { table: 'sales', salesId: 'e' };

  union_t1: T1 = { age: 3, name: 'sadf', bus: 'ssss', places: 3 };

  // could be one or another
  union_t2_3: T2 | T3 = { firstName: 'sss', age: 4, bus: 'ss' };

  // have all props
  intersection: T2 & T3 = {
    firstName: 'assa',
    LastName: 'ssss',
    age: 4,
    car: '444',
    bus: 'sssss',
  };
  constructor() {}

  ngOnInit(): void {
    console.log('***', this.union_t2_3);

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



    type A = {
      name: string;
      role: string;
    };
    
    type B = {
      first: string;
      last: string;
      role: string
    };
    
    type C = A|B;
    
    function test(value: C){
      if('name' in value){
        console.log(value.name)
      }
      if(value.hasOwnProperty("name")){
        // console.log(value.name) //error
      }
    
    }

  }

  checkTable(options: QueryOptions): string | never {
    switch (options.table) {
      case 'sales':
        return options.salesId;
      case 'session':
        return options.sessionId;
      // case 'user':
      //   return options.userId;
      default:
        let s: never;
        return s;
    }
  }

  // !!!! adding _ to the variable tells TS that I am aware that I don't use it
  unusedParameter(_message:string){
    console.log("unused parameter")
  }

}
// a class can implements a type as well as an interface
class OtrherUser implements TUser {
  name: string;
  age: number;
  private right: string;
}




