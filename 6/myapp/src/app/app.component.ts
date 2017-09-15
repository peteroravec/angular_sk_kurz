import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  observable: Observable<string>;
  observer: Observer<string>;

  handleComplete() {
    console.log('complete');
  }

  handleError(error) {
    console.log('error:', error);
    return Observable.throw(error);
  }

  handleData(data) {
    console.log('Here are the usable data', data);
  }

  ngOnInit() {

    this.observable = new Observable((observer: Observer<string>) => {
      this.observer = observer;
    });

    this.observable.subscribe(
      this.handleData,
      this.handleError,
      this.handleComplete
    );

    this.observer.next('1');
    this.observer.next('2');
    this.observer.next('3');
    this.observer.complete();
    this.observer.next('4');


  }

}
