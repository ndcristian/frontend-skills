// https://questglobal.udemy.com/course/rxjs-and-observables/learn/lecture/26322236#overview

//to run: http://localhost:4200/#/rxjs/observable
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { person } from '../../../model/person';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  data = ['unu', 'doi'];

  constructor() {}

  ngOnInit(): void {
    
    function subscribe(subscriber) {
      for (let d of this.data) {
        subscriber.next(d);
      }
    }

    const observable$ = new Observable<string>((subscriber) => {
      console.log('--Observable is executed');
      subscriber.next('Alice');
      subscriber.next('Ben');
      subscriber.next('Charlie');
    });

    // expected: --Observable is executed is displaied in console.
    observable$.subscribe();

    const observer = {
      next: (value: any) => console.log(value),
    };

    observable$.subscribe(observer);

    //OR we can write this in other way
    // in this case the callback function acts as the next function from the previus object
    // this is the shortest way and easy to read
    observable$.subscribe((value) => console.log(value));
  }
}
