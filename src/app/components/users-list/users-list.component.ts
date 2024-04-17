import { Component,OnInit } from '@angular/core';
import {UsersApiService} from "../../services/users-api.service";
import {UsersService} from "../../services/users/users.service";
import  {User} from "../../services/users/models/user.models";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers:[UsersService]
})
export class UsersListComponent implements OnInit {

  users: User[] = []; // Массив пользователей

  constructor(
    private usersApiService: UsersApiService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersApiService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (error) => {
          console.error('Failed to get users:', error);
        }
      );
  }

  deleteUser(userId: number): void {
    this.usersService.deleteUser(userId);
    this.users = this.users.filter(user => user.id !== userId);
  }
}
