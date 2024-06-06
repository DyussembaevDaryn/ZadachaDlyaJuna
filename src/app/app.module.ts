import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users/components/users-list/users-list.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './users/components/user-card/user-card.component';
import {API_URL} from "./users/tokens/injectionToken";


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
  { provide: API_URL, useValue: 'https://jsonplaceholder.typicode.com/users' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
