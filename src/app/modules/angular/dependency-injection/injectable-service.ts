import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let counter = 0;
@Injectable()
export class InjectableService {
  id: number;

  constructor(private http: HttpClient) {
    counter++;
    this.id = counter;
  }

  loadData(): Observable<any> {
    return this.http.get('/api');
  }
}
