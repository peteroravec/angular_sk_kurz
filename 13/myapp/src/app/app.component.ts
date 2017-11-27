import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import {UselessPipe} from "./pipes/useless.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  observableTime: Observable<string>;

  myText: string = 'Angular.sk - JavaScript framework';

  myDate: Object = new Date();

  myJSON: Object = {
    "type": "JSON",
    "content": [
      {"key": "value"},
      {"key2": "value2"}
    ]
  }

  pipeFromComponent: Object;

  myFilterData: Array<Object> = [
    {"name": "Superman", "canFly": true},
    {"name": "CatWoman", "canFly": false},
    {"name": "Batman", "canFly": true},
    {"name": "Hulk", "canFly": false},
    {"name": "SuperWoman", "canFly": true},
    {"name": "Wonder Woman", "canFly": false}
  ];

  myNumber: number = 123456789;
  myNumber2: number = 1.23456789;
  myNumber3: number = 0.123456789;
  myNumber4: number = 5.673123143;

  ngOnInit() {
    this.observableTime = this.getCurrentTimeFromDataStream();

    this.pipeFromComponent = new UselessPipe().transform('BEFORE', 'MYTEXT', 'AFTER');

  }

  getCurrentTimeFromDataStream() : Observable<string> {
      return new Observable<string>((observer: Subscriber<string>) => {
        setInterval(
          () => observer.next(new Date().toString())
          ,1000);
      });
  }

}
