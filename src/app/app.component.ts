import { Component } from '@angular/core';
import {User} from "./services/users/models/user.models";
import {UsersService} from "./services/users/users.service";
import {UsersApiService} from "./services/users-api.service";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';


}
