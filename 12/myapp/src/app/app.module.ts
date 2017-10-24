import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {HttpModule} from "@angular/http";
import { UserItemComponent } from './components/user-item/user-item.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const appRoutes: Routes = [
  { path: 'edit/:userid', component: EditUserComponent },
  { path: 'page/:id', component: UserListComponent },
  { path: '', redirectTo: 'page/1', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    EditUserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
