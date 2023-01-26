import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'etx-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() rotate: boolean;
  @Input() icon: string = "home";
  @Input() color: string;
  @Input() size: string = null;
  @Input() variant: string = "icon-only";

  constructor() { }

  ngOnInit(): void {
  }

}
