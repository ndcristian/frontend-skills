import { Component, OnInit } from '@angular/core';

//just a wrapper where we can aplly structural directive such as *ngIf , *ngFor

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss'],
})
export class NgContainerComponent implements OnInit {
  condition: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
