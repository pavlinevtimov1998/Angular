import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  getProfile$(): Observable<IUser> {
    return this.http
      .get<IUser>(environment.apiUrl + '/users/profile', {
        withCredentials: true,
      })
      .pipe(tap((user) => (this.user = user)));
  }

  editProfile$(body: IUser): Observable<IUser> {
    return this.http
      .put<IUser>(environment.apiUrl + '/users/profile', body, {
        withCredentials: true,
      })
      .pipe(tap((user) => (this.user = user)));
  }

  logout(): void {
    this.loggedIn = false;
  }
}
