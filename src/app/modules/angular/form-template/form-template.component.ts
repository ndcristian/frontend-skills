import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from './form-template.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'etx-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent implements OnInit {
  constructor(private crudService: CrudService) {}

  file: File

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });
    const hexValue = new FormData();
    hexValue.append('file', this.file);
    let params = new HttpParams();
    params = params.append("name", "ASRFD");
    this.crudService.post('file/test', hexValue, params).subscribe((res) => {
      console.log('*****', res);
    });
  }

  uploadFile(event) {
    console.log(event.target.files[0]);
    
    this.file = event.target.files[0]
  }
}
