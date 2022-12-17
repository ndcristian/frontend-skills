import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() placeholder: string = 'Placeholder';
  @Input() type: string = 'text';
  @Output() emitInputValue = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  sendInputValue(value: any) {
    this.emitInputValue.emit(value);
  }
}
