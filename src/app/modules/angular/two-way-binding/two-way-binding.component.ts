import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  title:string=""

  constructor() { }

  ngOnInit(): void {
  }
  updateTitle(evt:Event){
    this.title=(<HTMLInputElement>evt.target).value;
  }
}
