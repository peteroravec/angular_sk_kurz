import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user: object;
  @Output() onUserDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteUser = function(userID) {
    this.onUserDelete.emit(userID);
  }

}
