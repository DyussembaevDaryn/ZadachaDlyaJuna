import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {Routes,RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';

const appRoutes: Routes =[
  {path:'users', component: UsersListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
