import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ UserService ]
})
export class UserListComponent implements OnInit {

  allUserData: Object;
  currentPage: Number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe((params: Params) => {
      this.currentPage = parseInt(params['id']);
      this.loadPage(this.currentPage);
    });

  }

  loadPage(pageID: Number) {
    this.userService.getUserListPage(this.currentPage).subscribe(data => this.allUserData = data);
  }

  reloadCurrentPage() {
    this.loadPage(this.currentPage);
  }

  ngOnInit() {

  }

}
