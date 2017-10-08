import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoggedInGuard ]
})
export class AppComponent {

  constructor(private router: Router) {}

  navigateMeTo(routeName) {
    this.router.navigate([routeName]);
  }

}
