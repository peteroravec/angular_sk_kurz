import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'mycounter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  counterValue: number = 0;

  @Output() counterChange = new EventEmitter();

  @Input() get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

  constructor() { }

  ngOnInit() {
  }

}
