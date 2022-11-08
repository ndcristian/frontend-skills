import { Component, OnInit } from '@angular/core';

//route:ng/ngstyle
@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getStyle(){
    return {'color':'yellow'}
  }
}
