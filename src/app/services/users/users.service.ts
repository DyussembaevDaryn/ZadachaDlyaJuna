import { Injectable} from '@angular/core';
import  {User} from "./models/user.models";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = []; // свойство для хранения пользователей

  constructor() { }

  // метод для удаления пользователя
  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }
}

