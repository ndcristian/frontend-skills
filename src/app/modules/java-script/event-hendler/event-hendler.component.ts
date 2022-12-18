import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-hendler',
  templateUrl: './event-hendler.component.html',
  styleUrls: ['./event-hendler.component.scss']
})
export class EventHendlerComponent implements OnInit {

  @ViewChild('div') divElement: ElementRef;
  @ViewChild('div') btnElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  divClick(event){
    console.log("DIV-CLICK", event)
  }
  btnClick(event){
    event.stopPropagation();
    console.log("BTN-CLICK",event)
    console.log(this.divElement)
    console.log(this.btnElement)
  }
  inputClick(event:Event){
    event.preventDefault();
  }
}
