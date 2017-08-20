import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData: Array<object> = [{'id': 1, 'company': 'Fanoodle', 'first_name': 'Dunc', 'last_name': 'Philbrick', 'email': 'dphilbrick0@tripod.com', 'gender': 'Male', 'address': '5736 Spenser Way', 'birthday': '1922-05-25T17:30:10Z'},
    {'id': 2, 'picture': 'https://robohash.org/doloresvitaedelectus.jpg?size=150x150&set=set1', 'company': 'Rhycero', 'first_name': 'Ellwood', 'last_name': 'Cattermoul', 'gender': 'Male', 'address': '03 Maple Road', 'birthday': '1945-11-28T09:36:25Z'},
    {'id': 3, 'picture': 'https://robohash.org/repudiandaehicaccusamus.png?size=150x150&set=set1', 'company': 'Tazzy', 'first_name': 'Catherin', 'last_name': 'Chelsom', 'email': 'cchelsom2@nsw.gov.au', 'gender': 'Female', 'address': '12372 Mayer Hill', 'birthday': '1925-02-26T08:34:12Z'},
    {'id': 4, 'picture': 'https://robohash.org/consequaturestconsequatur.jpg?size=150x150&set=set1', 'company': 'Skaboo', 'first_name': 'Blondy', 'last_name': 'Broun', 'email': 'bbroun3@freewebs.com', 'gender': 'Female', 'address': '41253 Lyons Center', 'birthday': '1964-11-29T21:04:39Z'},
    {'id': 5, 'picture': 'https://robohash.org/eterrorut.jpg?size=150x150&set=set1', 'company': 'Skinte', 'first_name': 'Orlan', 'last_name': 'Panton', 'email': 'opanton4@delicious.com', 'gender': 'Male', 'address': '2 Havey Alley', 'birthday': '1956-08-26T03:28:27Z'}];

  constructor() { }

  ngOnInit() {
  }

  deleteUserFromJSON = function(userID) {

    var index = this.userData.findIndex(function(item, i){
      return item.id === userID
    });

    this.userData.splice(index, 1);

  }

  addNewUser = function() {

    this.userData.push({
      'id': this.userData.length + 1,
      'picture': 'https://robohash.org/doloresvitaedelectus.jpg?size=150x150&set=set1',
      'company': 'New Company',
      'first_name': 'Peter',
      'last_name': 'Oravec',
      'gender': 'Male',
      'address': '03 Maple Road',
      'birthday': '1945-11-28T09:36:25Z'
    })

  }

}
