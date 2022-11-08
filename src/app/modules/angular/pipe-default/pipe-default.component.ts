import { Component, OnInit } from '@angular/core';
import { person } from '../../model/person';

@Component({
  selector: 'app-pipe-default',
  templateUrl: './pipe-default.component.html',
  styleUrls: ['./pipe-default.component.scss'],
})
export class PipeDefaultComponent implements OnInit {
  person = person;
  c_date: Date = new Date(2022, 0, 2);
  number_ex = 3.4532;
  string_ex = 'text exemple';
  pertage_ex = 0.7;

  fromIndex=0;
  toIndex=3
  constructor() {}

  ngOnInit(): void {}
}
