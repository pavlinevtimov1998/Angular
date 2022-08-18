import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = new BehaviorSubject<IUser | undefined>(undefined);

  currentUser$ = this._currentUser.asObservable();

  constructor(private http: HttpClient) {}

  login$(body: { email: string; password: string }): Observable<IUser> {
    return this.http.post<IUser>(environment.apiUrl + '/login', body, {
      withCredentials: true,
    });
  }

  register$(body: {
    email: string;
    password: string;
    tel?: string;
  }): Observable<IUser> {
    return this.http.post<IUser>(environment.apiUrl + '/register', body, {
      withCredentials: true,
    });
  }

  logout$(): Observable<void> {
    return this.http.post<void>(
      environment.apiUrl + '/logout',
      {},
      {
        withCredentials: true,
      }
    );
  }

  handleLogin(newlyUser: IUser) {
    this._currentUser.next(newlyUser);
  }
}
