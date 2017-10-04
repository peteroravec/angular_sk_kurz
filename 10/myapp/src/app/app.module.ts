import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PinkComponent } from './components/pink/pink.component';
import { OrangeComponent } from './components/orange/orange.component';
import { BlueComponent } from './components/blue/blue.component';
import { RedComponent } from './components/red/red.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PinkComponent,
    OrangeComponent,
    BlueComponent,
    RedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
