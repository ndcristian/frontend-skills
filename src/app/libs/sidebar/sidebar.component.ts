import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  @Input() templateImput:TemplateRef<any>;
  @Input() text:string;

  constructor() { }

  ngOnInit(): void {
  }

}
