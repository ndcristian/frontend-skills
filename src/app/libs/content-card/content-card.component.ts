import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() defaultTitle:string;

  constructor() { }

  prop1:string = "prop1"
  prop2:string = "prop2"
  prop3:string = "prop3"

  ngOnInit(): void {
  }



}
