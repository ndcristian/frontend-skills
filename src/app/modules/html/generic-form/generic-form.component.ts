import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  formData:{username?:string, password?:string} = {};

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  setFormValue(event, property){
    console.log(event, property)
    this.formData[property] = event;
    console.log(this.formData)
   
  }

  subbmit(){
    console.log("SUBMIT")
    this.router.navigate(['/html/layout', { message: this.formData.username }]);
  }

}
