import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-template-form',
  templateUrl: './ng-template-form.component.html',
  styleUrls: ['./ng-template-form.component.scss']
})
export class NgTemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
