import { Component, OnInit, ElementRef } from '@angular/core';
import { MyHttpService } from './my-http.service';

//rxjs operators
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MyHttpService ]
})
export class AppComponent implements OnInit {

  inputChange = new Subject();

  constructor(
    private element: ElementRef,
    private _myservice: MyHttpService
  ) {}

  ngOnInit() {
    this.handleInputFieldData();
  }

  onChange(e) {
    this.inputChange.next(e);
  }

  handleInputFieldData() {
    this.inputChange.asObservable()
      //.debounceTime(1000)
      .switchMap((textInput: string) => this._myservice.loadSomething(textInput))
      .distinctUntilChanged()
      .subscribe(results => {
        console.log(results);
      });
  }

}
