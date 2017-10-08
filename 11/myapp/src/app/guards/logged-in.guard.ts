import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


        //your verification logic here
        if(localStorage['logged'] == 'true') {
          return true;
        } else {
          this.router.navigate(['/noaccess']);
        }

  }
}
