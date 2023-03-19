import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-let-var',
  templateUrl: './let-var.component.html',
  styleUrls: ['./let-var.component.scss']
})
export class LetVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/* 
LET is block scope
VAR is global scope BUT in STRICT-MODE is function scope

*/
}
