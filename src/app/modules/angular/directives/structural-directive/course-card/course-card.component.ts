import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'etx-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() name:string;

  constructor() { }

  ngOnInit(): void {
  }

}
