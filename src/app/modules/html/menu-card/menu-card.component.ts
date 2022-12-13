import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() name: string;
  @Input() url: string;

  @Output() evtClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.evtClick.emit(this.url);
  }
}
