import { Component, OnInit } from '@angular/core';


//route:ng/ngclass
@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  condition : string = "text"

  ngOnInit(): void {
  }

  getClasses(){
    return ['setBackgound', 'setRadius']
  }

}
