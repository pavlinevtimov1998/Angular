import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';

@Injectable()
export class UserService {
  loggedIn = false;
  user!: IUser;

  constructor(private http: HttpClient) {}

  login$(body: {}): Observable<IUser> {
    return this.http.post<IUser>(environment.apiUrl + '/login', body, {
      withCredentials: true,
    });
  }

  register$(body: {}): Observable<IUser> {
    return this.http.post<IUser>(environment.apiUrl + '/register', body, {
      withCredentials: true,
    });
  }

  logout(): void {
    this.loggedIn = false;
  }
}
