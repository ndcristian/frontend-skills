import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent implements OnInit {

  @Input() type:string;
  @Input() placeholder:string;
  @Input() name:string;

  @Output() emitInputValue= new EventEmitter<{nstring}>()

  constructor() { }

  ngOnInit(): void {
  }

  setInputValue(event:any){
    console.log(event)
    this.emitInputValue.emit(event)
  }

}
