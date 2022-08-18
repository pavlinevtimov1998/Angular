import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';

@Injectable()
export class UserService {
  

  constructor(private http: HttpClient) {}

  

  getProfile$(): Observable<IUser> {
    return this.http
      .get<IUser>(environment.apiUrl + '/users/profile', {
        withCredentials: true,
      })
      // .pipe(tap((user) => (this.user = user)));
  }

  editProfile$(body: IUser): Observable<IUser> {
    return this.http
      .put<IUser>(environment.apiUrl + '/users/profile', body, {
        withCredentials: true,
      })
      // .pipe(tap((user) => (this.user = user)));
  }

}
