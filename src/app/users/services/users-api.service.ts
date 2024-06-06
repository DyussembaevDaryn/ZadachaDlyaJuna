import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/Users";
import {API_URL} from "../tokens/injectionToken";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient,@Inject(API_URL) private api_url:string) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api_url);
  }
}
