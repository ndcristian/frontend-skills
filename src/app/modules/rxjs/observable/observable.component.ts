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

  observableMethode(value: string): Observable<string> {
    return new Observable<string>((subscriber) => {
      subscriber.next(value);
    });
  }

  ngOnInit(): void {
    function subscribe(subscriber) {
      for (let d of this.data) {
        subscriber.next(d);
      }
    }

    // !!!! it only receive the data
    // !!! Observable are unicast that means each subscriber receive the data only when it call subscribe() method
    // which means that they can receive different values depending the time when they subscribe
    // it does not have emit() or next() method
    // this code will be execited every time when subscribe() is called and the time and counter will be different for each run
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

    // expected: --Observable is executed is displaied in console.
    //
    observable$.subscribe();

    const observerO = {
      next: (value: any) => console.log('O:::', value),
    };
    // observerO becames the subscriber in Observable definition and this is why it has to containes the next() method
    observable$.subscribe(observerO);
    observable$.subscribe({
      next: (value) => {
        console.log('O+++', value);
      },
    });
    observable$.subscribe((value) => {
      console.log('O---', value);
    });

    /** USING METHODE */

    const $obsAsValue = this.observableMethode('Methode-value');
    $obsAsValue.subscribe((v) => {
      console.log('METHODE-USE::', v);
    });

    setTimeout(() => {
      $obsAsValue.subscribe((v) => {
        console.log('TIME-OUT-METHODE-USE::', v);
      });
    }, 1000);

    /** *************SUBJECT****************** */
    console.log('*********SUBJECT*********');
    console.log('*************************');
    // !!! it receive the data and also emit data
    // !!! subject are multicasting that means multiple observers receive the same data at once
    const $subject = new Subject<{
      name: string;
      time: number;
      order: number;
    }>();

    const observerS = {
      next: (value: any) => console.log('S:::', value),
    };

    // BehaviorSubject = keep the last emited value. It will emit the last value even you subscribe after event was emited
    // ReplaySubject(x) = keeps tha last x emited values , so it will always emit last x valus

    // subscription must be called before subject next() method
    // both subscribe() call wili display exactly the same result, even the miliconds are the same
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

    //this subscription is never executed because it is called after subject emitting values
    $subject.subscribe(() => {
      console.log('This message will not be present in console');
    });

    //OR we can write this in other way
    // in this case the callback function acts as the next function from the previus object
    // this is the shortest way and easy to read
    // observable$.subscribe((value) => console.log(value));

    //!!! this proves that Observable is executed when someone subscribe to it. otherwise nothing happens
    // this is tha main difference between Observable and Promis
    // The Promis start execution from the moment it is created

    let o1 = new Observable<string>((subscriber) => {
      // this pice of code will be executed at every second using the next() method provided when o1.subscribe() is called
      setInterval(() => {
        console.log('.....', new Date().getSeconds());
        // it will emits a different value every second
        subscriber.next(`P3 second is: ${new Date().getSeconds()}`);
      }, 1000);
    });

    // this prvoves that Observable is executed when subscribe() is called with the value of the call moment
    // o1.subscribe({
    //   next: (message) => {
    //     console.log(`***Subscriber-1 message is:`, message);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log(`Completed`);
    //   },
    // });

    // to see the difference , comment out the above subscribe
    // this prvoves that Observable is executed when subscribe() is called with the value of the call moment
    // setTimeout(()=>{
    //   o1.subscribe({
    //     next: (message) => {
    //       console.log(`+++Subscriber-2 message is:`, message);
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //     complete: ()=>{
    //       console.log(`Completed`);
    //     }
    //   });
    // }, 1500)

    // another example about Observable emitting values

    let o2 = new Observable<string>((subscriber) => {
      console.log('.....', new Date().getSeconds());
      // it will emits a different value at every second
      subscriber.next(`O2 second is: ${new Date().getSeconds()}`);
    });

    setInterval(() => {
      o2.subscribe({next:(second)=>{
        console.log(`***Subscriber-O2 message is:`, second)
      }})
    }, 3000);
  }
}
