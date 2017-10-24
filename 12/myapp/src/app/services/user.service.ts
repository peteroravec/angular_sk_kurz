import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getAllUsers(): Observable<string> {
    return this._http.get('http://localhost:4000/users')
      .map((res: Response) => res.json());
  }

  getUserListPage(pageNumber): Observable<string> {
    return this._http.get('http://localhost:4000/users/?_page='+ pageNumber + '&_limit=10')
      .map((res: Response) => res.json());
  }

  getUserInfo(userId): Observable<string> {
    return this._http.get('http://localhost:4000/users/'+ userId)
      .map((res: Response) => res.json());
  }

  deleteUser(userId): Observable<string> {
    let deleteURL = 'http://localhost:4000/users/'+ userId;
    return this._http.delete(deleteURL)
      .map((res: Response) => res.json());
  }

  updateUser(userId, data): Observable<string> {

    let updateURL = 'http://localhost:4000/users/'+ userId;

    let headers = new Headers({'Content-Type': 'application/json'});
    let option: RequestOptions = new RequestOptions({ headers: headers });

    return this._http.put(updateURL, data, option)
      .map((res: Response) => res.json());

  }

}
