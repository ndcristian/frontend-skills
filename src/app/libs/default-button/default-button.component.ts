import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss'],
})
export class DefaultButtonComponent implements OnInit {
  
  @Output() clickEvt = new EventEmitter();
  @Input() title:string  = "Confirm"
  
  constructor() {}

  ngOnInit(): void {}

  btnClicked() {
    this.clickEvt.emit();
  }
}
