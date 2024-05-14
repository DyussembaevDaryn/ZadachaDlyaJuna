import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
