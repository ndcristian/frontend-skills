// https://questglobal.udemy.com/course/rxjs-and-observables/learn/lecture/26322236#overview

//to run: http://localhost:4200/#/rxjs/observable
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { person } from '../../../model/person';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  data = ['unu', 'doi'];
  counter = 0;
  constructor() {}

  ngOnInit(): void {
    function subscribe(subscriber) {
      for (let d of this.data) {
        subscriber.next(d);
      }
    }

    // !!!! it only receive the data
    // !!! Observable are unicast that means each subscriber receive the data only when it call subscribe() method
    // which means that they can receive different values depending the time when they subscribe
    const observable$ = new Observable<{
      name: string;
      time: number;
      order: number;
    }>((subscriber) => {
      console.log('--Observable is executed');
      this.counter++;
      subscriber.next({
        name: 'Alice',
        time: new Date().getMilliseconds(),
        order: this.counter + 1,
      });
      subscriber.next({
        name: 'Ben',
        time: new Date().getMilliseconds(),
        order: this.counter + 2,
      });
      subscriber.next({
        name: 'Jack',
        time: new Date().getMilliseconds(),
        order: this.counter + 3,
      });
    });
    // !!! it receive the data and also emit data
    // !!! subject are multicasting that means multiple observers receive the same data at once
    const $subject = new Subject<{
      name: string;
      time: number;
      order: number;
    }>();

    // BehaviorSubject = keep the last emited value. It will emit the last value even you subscribe after event was emited
    // ReplaySubject(x) = keeps tha last x emited values , so it will always emit last x valus

    // expected: --Observable is executed is displaied in console.
    // observable$.subscribe();

    const observerO = {
      next: (value: any) => console.log('O:::', value),
    };
    const observerS = {
      next: (value: any) => console.log('S:::', value),
    };

    observable$.subscribe(observerO);
    observable$.subscribe(observerO);

    //
    $subject.subscribe(observerS);
    $subject.subscribe(observerS);

    $subject.next({
      name: 'Alice',
      time: new Date().getMilliseconds(),
      order: this.counter + 1,
    });
    $subject.next({
      name: 'Ben',
      time: new Date().getMilliseconds(),
      order: this.counter + 2,
    });
    $subject.next({
      name: 'Jack',
      time: new Date().getMilliseconds(),
      order: this.counter + 3,
    });

    //OR we can write this in other way
    // in this case the callback function acts as the next function from the previus object
    // this is the shortest way and easy to read
    // observable$.subscribe((value) => console.log(value));


    //!!! this proves that Observable is executed when someone subscribe to it. otherwise nothing happens
    // this is tha main difference between Observable and Promis 
    // The Promis start execution from the moment it is created
    let o1 = new Observable<string>((subscriber) => {
      setInterval(() => {
        console.log('******', new Date().getSeconds());
        subscriber.next(`P3 second is: ${new Date().getSeconds()}`);
      }, 1000);
    });

    o1.subscribe({
      next: (message) => {
        console.log(`Subscriber-1 message is:`);
        console.log(message);
      },
      error: (error) => {
        console.log(error);
      },
      complete: ()=>{
        console.log(`Completed`);
      }
    });

    setTimeout(()=>{
      o1.subscribe({
        next: (message) => {
          console.log(`Subscriber-2 message is:`);
          console.log(message);
        },
        error: (error) => {
          console.log(error);
        },
        complete: ()=>{
          console.log(`Completed`);
        }
      });
    }, 1500)

  }
}
