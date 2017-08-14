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
    {'id': 5, 'picture': 'https://robohash.org/eterrorut.jpg?size=150x150&set=set1', 'company': 'Skinte', 'first_name': 'Orlan', 'last_name': 'Panton', 'email': 'opanton4@delicious.com', 'gender': 'Male', 'address': '2 Havey Alley', 'birthday': '1956-08-26T03:28:27Z'},
    {'id': 6, 'picture': 'https://robohash.org/etnumquamsimilique.png?size=150x150&set=set1', 'company': 'Meetz', 'first_name': 'Vic', 'last_name': 'Bloyes', 'email': 'vbloyes5@wunderground.com', 'gender': 'Male', 'address': '559 Duke Hill', 'birthday': '1990-06-03T09:46:26Z'},
    {'id': 7, 'picture': 'https://robohash.org/omnisliberout.png?size=150x150&set=set1', 'company': 'Kazu', 'first_name': 'Davis', 'last_name': 'Zamorano', 'email': 'dzamorano6@live.com', 'gender': 'Male', 'address': '6274 Dixon Park', 'birthday': '1952-07-10T11:22:28Z'},
    {'id': 8, 'picture': 'https://robohash.org/undequaequis.bmp?size=150x150&set=set1', 'company': 'Innotype', 'first_name': 'Pris', 'last_name': 'Wheadon', 'email': 'pwheadon7@msu.edu', 'gender': 'Female', 'address': '1 Heath Parkway', 'birthday': '1958-11-12T22:52:49Z'},
    {'id': 9, 'picture': 'https://robohash.org/quiautemunde.jpg?size=150x150&set=set1', 'company': 'Roodel', 'first_name': 'Kelvin', 'last_name': 'Jerrolt', 'email': 'kjerrolt8@fotki.com', 'gender': 'Male', 'address': '9560 Bobwhite Trail', 'birthday': '1965-08-13T13:55:37Z'},
    {'id': 10, 'picture': 'https://robohash.org/ipsumetnon.png?size=150x150&set=set1', 'company': 'Leexo', 'first_name': 'Cyrillus', 'last_name': 'Magor', 'email': 'cmagor9@icq.com', 'gender': 'Male', 'address': '0 Sycamore Parkway', 'birthday': '1983-10-29T13:39:45Z'},
    {'id': 11, 'picture': 'https://robohash.org/magnamdoloremquod.png?size=150x150&set=set1', 'company': 'Dabtype', 'first_name': 'Bing', 'last_name': 'Daintry', 'email': 'bdaintrya@yelp.com', 'gender': 'Male', 'address': '4912 Division Crossing', 'birthday': '1970-07-01T18:33:23Z'},
    {'id': 12, 'picture': 'https://robohash.org/atquiaimpedit.jpg?size=150x150&set=set1', 'company': 'Yata', 'first_name': 'Vladimir', 'last_name': 'Bunn', 'email': 'vbunnb@hugedomains.com', 'gender': 'Male', 'address': '09220 Sunnyside Way', 'birthday': '1929-06-29T01:10:14Z'},
    {'id': 13, 'picture': 'https://robohash.org/similiquenostrumvelit.jpg?size=150x150&set=set1', 'company': 'Trupe', 'first_name': 'Verena', 'last_name': 'Irwin', 'email': 'virwinc@meetup.com', 'gender': 'Female', 'address': '56784 Northport Center', 'birthday': '1946-02-03T08:37:41Z'},
    {'id': 14, 'picture': 'https://robohash.org/sintillumeveniet.jpg?size=150x150&set=set1', 'company': 'Oyoba', 'first_name': 'Gwyneth', 'last_name': 'Bakeup', 'email': 'gbakeupd@businesswire.com', 'gender': 'Female', 'address': '5 Mccormick Plaza', 'birthday': '1936-07-09T17:17:40Z'},
    {'id': 15, 'picture': 'https://robohash.org/totamtemporibusullam.jpg?size=150x150&set=set1', 'company': 'Gabtune', 'first_name': 'Seymour', 'last_name': 'Bissill', 'email': 'sbissille@yelp.com', 'gender': 'Male', 'address': '16873 Welch Alley', 'birthday': '1959-06-12T06:27:55Z'},
    {'id': 16, 'picture': 'https://robohash.org/optioillumexcepturi.jpg?size=150x150&set=set1', 'company': 'Quamba', 'first_name': 'Hetti', 'last_name': 'Maxwaile', 'email': 'hmaxwailef@acquirethisname.com', 'gender': 'Female', 'address': '470 Pine View Avenue', 'birthday': '1953-02-18T02:32:28Z'},
    {'id': 17, 'picture': 'https://robohash.org/quiaadipiscitempore.jpg?size=150x150&set=set1', 'company': 'Edgepulse', 'first_name': 'Mead', 'last_name': 'Axon', 'email': 'maxong@shareasale.com', 'gender': 'Female', 'address': '90576 Ridgeway Avenue', 'birthday': '1981-09-17T03:17:18Z'},
    {'id': 18, 'picture': 'https://robohash.org/distinctioexpeditavoluptas.png?size=150x150&set=set1', 'company': 'Browsebug', 'first_name': 'Terese', 'last_name': 'McVaugh', 'email': 'tmcvaughh@plala.or.jp', 'gender': 'Female', 'address': '7931 Stang Drive', 'birthday': '1955-06-15T06:07:41Z'},
    {'id': 19, 'picture': 'https://robohash.org/quoadexpedita.png?size=150x150&set=set1', 'company': 'Voomm', 'first_name': 'Vannie', 'last_name': 'Gehring', 'email': 'vgehringi@shinystat.com', 'gender': 'Female', 'address': '78647 Troy Trail', 'birthday': '1969-07-07T06:31:20Z'},
    {'id': 20, 'picture': 'https://robohash.org/quaevoluptaspariatur.bmp?size=150x150&set=set1', 'company': 'Yodoo', 'first_name': 'Gabbey', 'last_name': 'Comusso', 'email': 'gcomussoj@cargocollective.com', 'gender': 'Female', 'address': '4403 Veith Point', 'birthday': '1993-04-16T21:20:09Z'},
    {'id': 21, 'picture': 'https://robohash.org/idnamex.png?size=150x150&set=set1', 'company': 'Trudeo', 'first_name': 'Dina', 'last_name': 'Jozwiak', 'email': 'djozwiakk@csmonitor.com', 'gender': 'Female', 'address': '37 Barnett Alley', 'birthday': '1940-12-29T05:23:06Z'},
    {'id': 22, 'picture': 'https://robohash.org/consequunturdoloresreiciendis.bmp?size=150x150&set=set1', 'company': 'Meeveo', 'first_name': 'Niki', 'last_name': 'Harower', 'email': 'nharowerl@cbsnews.com', 'gender': 'Female', 'address': '3506 Clyde Gallagher Park', 'birthday': '1962-08-13T14:24:31Z'},
    {'id': 23, 'picture': 'https://robohash.org/minusdebitispariatur.jpg?size=150x150&set=set1', 'company': 'Quaxo', 'first_name': 'Pennie', 'last_name': 'Sisnett', 'email': 'psisnettm@sciencedaily.com', 'gender': 'Female', 'address': '3084 Roxbury Street', 'birthday': '1945-07-05T13:13:06Z'},
    {'id': 24, 'picture': 'https://robohash.org/cumsedillo.png?size=150x150&set=set1', 'company': 'Gabspot', 'first_name': 'Brandon', 'last_name': 'Mingame', 'email': 'bmingamen@smugmug.com', 'gender': 'Male', 'address': '62 Sugar Avenue', 'birthday': '1964-02-26T17:17:53Z'},
    {'id': 25, 'picture': 'https://robohash.org/quiaametimpedit.bmp?size=150x150&set=set1', 'company': 'Innotype', 'first_name': 'Horace', 'last_name': 'Shoubridge', 'email': 'hshoubridgeo@adobe.com', 'gender': 'Male', 'address': '8 Pepper Wood Park', 'birthday': '1982-04-13T08:21:44Z'},
    {'id': 26, 'picture': 'https://robohash.org/earumautesse.png?size=150x150&set=set1', 'company': 'Youtags', 'first_name': 'Curtis', 'last_name': 'Stayt', 'email': 'cstaytp@networkadvertising.org', 'gender': 'Male', 'address': '62 Manufacturers Plaza', 'birthday': '1934-12-23T09:00:35Z'},
    {'id': 27, 'picture': 'https://robohash.org/temporibusdelectusmolestias.png?size=150x150&set=set1', 'company': 'Photobean', 'first_name': 'Cortney', 'last_name': 'De Biaggi', 'email': 'cdebiaggiq@google.com.br', 'gender': 'Female', 'address': '796 Moulton Court', 'birthday': '1927-06-02T12:56:40Z'},
    {'id': 28, 'picture': 'https://robohash.org/ducimuscorporismaiores.bmp?size=150x150&set=set1', 'company': 'Vinder', 'first_name': 'Jacklyn', 'last_name': 'Craker', 'email': 'jcrakerr@mtv.com', 'gender': 'Female', 'address': '4872 Sunbrook Pass', 'birthday': '1943-04-16T07:09:05Z'},
    {'id': 29, 'picture': 'https://robohash.org/culpaessedeleniti.bmp?size=150x150&set=set1', 'company': 'Zoomcast', 'first_name': 'Grier', 'last_name': 'Mouser', 'email': 'gmousers@tripod.com', 'gender': 'Female', 'address': '430 Old Gate Trail', 'birthday': '1953-01-21T10:10:43Z'},
    {'id': 30, 'picture': 'https://robohash.org/eumnumquamnemo.jpg?size=150x150&set=set1', 'company': 'Meembee', 'first_name': 'Jon', 'last_name': 'Spurling', 'email': 'jspurlingt@icq.com', 'gender': 'Male', 'address': '2 Nova Place', 'birthday': '1991-10-01T18:07:52Z'}];

  constructor() { }

  ngOnInit() {
  }

}
