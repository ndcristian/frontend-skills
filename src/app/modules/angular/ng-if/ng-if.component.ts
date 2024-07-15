import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIfComponent implements OnInit {
  condtion: boolean = false;

  data: any;
  data2: any[];
  data$: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next: (res) => {
          this.data = res;
          console.log(this.data);
        },
      });

      // other way to get data from template using asing pipe
      this.data$ = this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')

  }
}
