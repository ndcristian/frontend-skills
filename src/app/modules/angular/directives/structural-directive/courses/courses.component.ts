import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'etx-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  @Input() courseList: string[];

  constructor() {}

  ngOnInit(): void {}
}
