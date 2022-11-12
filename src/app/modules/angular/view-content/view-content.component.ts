import { Component, OnInit } from '@angular/core';


// works in the same way as view-child but only in the projected element
@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss']
})
export class ViewContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
