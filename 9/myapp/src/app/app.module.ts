import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OnlyAdminDirective } from './directives/only-admin.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    OnlyAdminDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
