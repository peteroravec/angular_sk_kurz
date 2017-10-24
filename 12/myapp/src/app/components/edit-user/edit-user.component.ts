import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [ UserService ]
})
export class EditUserComponent implements OnInit {

  userData: Object;
  editUserID: Number;
  saved: boolean = false;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService
  ) {

  }

  saveData(userData) {

    this.userService.updateUser(this.editUserID, this.userData).
      subscribe(data => {
        this.saved = true;

        setTimeout(() => this.saved = false, 1000);
    });

  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.editUserID = parseInt(params['userid']);

      this.userService.getUserInfo(this.editUserID).subscribe(data => this.userData = data);

    });

  }

}
