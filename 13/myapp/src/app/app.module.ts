import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UselessPipe } from './pipes/useless.pipe';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UselessPipe,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
