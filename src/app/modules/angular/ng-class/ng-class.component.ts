import { Component, OnInit } from '@angular/core';


//route:ng/ngclass
@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getClasses(){
    return ['setBackgound', 'setRadius']
  }

}
