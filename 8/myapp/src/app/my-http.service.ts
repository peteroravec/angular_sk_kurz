import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyHttpService {

  constructor(private http: Http) { }

  loadSomething(myText: string): Observable<string> {
    return this.http.get('http://echo.jsontest.com/text/'+ myText)
      .map(
        res => res.json().text
      );
  }

}
