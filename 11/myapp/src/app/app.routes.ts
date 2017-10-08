import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BlueComponent } from './components/blue/blue.component';
import { OrangeComponent } from './components/orange/orange.component';
import { PinkComponent } from './components/pink/pink.component';
import { RedComponent } from './components/red/red.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'noaccess', component: AccessDeniedComponent },
  { path: 'simple-routing', canActivate: [ LoggedInGuard ], children: [
      { path: 'blue', component: BlueComponent },
      { path: 'orange', component: OrangeComponent },
      { path: 'pink', component: PinkComponent },
      { path: 'red', component: RedComponent },
  ]},
  { path: '**', component: NotFoundComponent }
];

export const appRouterModule = RouterModule.forRoot(routes, { useHash: true });
