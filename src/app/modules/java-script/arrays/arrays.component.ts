import { Component, OnInit } from '@angular/core';
// import { person } from 'src/app/model/person';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss'],
})
export class ArraysComponent implements OnInit {
  constructor() {}

  // numbers:number[] = [1,2,3,4];
  numbers:string[] = ["a", "b", "c","d"];

 person = [
    {name:"John", age:30},
    {name:"Mary", age:31},
    {name:"Dan", age:32},
    {name:"Patrick", age:33},
    {name:"Olive", age:34},
    {name:"Tim", age:35},
    {name:"Tom", age:36},
]

  ngOnInit(): void {

    // this.person.map((item) => {
    //   item = {name:"map name", age:11}
    //   // try this to see the diference and comment before line
    //   // item.name = "map-name"
    // });
    // console.log(this.person);

    this.person.map((item) => {
      item = {name:"map name", age:11}
      console.log(item)
      // try this to see the diference and comment before line
      // item.name = "map-name"
    });
    console.log(this.person);


    this.numbers.map((number)=>{
      console.log(number+2)
      number="number+2"
    })

    console.log(this.numbers)

  }
}
