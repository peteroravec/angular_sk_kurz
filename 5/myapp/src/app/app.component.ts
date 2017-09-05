import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ExampleService ]
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private _exampleService: ExampleService) {
    console.log('constructor');
    this.title = _exampleService.sayHello();
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.saySomething('Hello, this is ngOnInit');
  }

  changeText = function(text) {
    this.title = text;
  }

  saySomething = function(text) {
    console.log(text);
  }

}
