import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  providers: [ UserService ]
})
export class UserItemComponent implements OnInit {

  @Input() userData: Object;
  @Output() deletedUser: EventEmitter<boolean> = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser(userID: Number) {

    this.userService.deleteUser(userID).subscribe((data) => {

      this.deletedUser.emit(true);

    });

  }

}
