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

  // union type
  admin: TUser & TAdmin;

  constructor() {}

  ngOnInit(): void {
    console.log(Role.ADMIN);
    console.log(Role2.ADMIN);
    console.log(Role3.ADMIN);

    this.role = ["3",4]

    this.admin = { name: 'cris', age: 23, role: 'admin' };

    const oth = new OtrherUser();

  }
}
// a class can implements a type as well as an interface
class OtrherUser implements TUser {
  name: string;
  age: number;
  private right: string
}
