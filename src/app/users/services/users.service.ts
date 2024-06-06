import { Injectable} from '@angular/core';
import {User} from "../interfaces/Users";
import {BehaviorSubject, Observable} from "rxjs";
import {UsersApiService} from "./users-api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userSubject = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this.userSubject.asObservable()

  constructor(private UsersApiService: UsersApiService ) { }


  deleteUser(userId: number): void {
    this.userSubject.next(this.userSubject.value.filter(user => user.id !== userId));
  }
  loadUsers(): void {
    this.UsersApiService.getUsers().subscribe(
      (data) => {
        this.userSubject.next(data)
      }
    )
  }
}

