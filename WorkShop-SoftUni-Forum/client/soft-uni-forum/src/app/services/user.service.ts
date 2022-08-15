import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IUser {
  username: string;
  email: string;
  tel?: string;
}

@Injectable()
export class UserService {
  loggetIn = false;

  constructor(private http: HttpClient) {}

  login(): void {
    this.loggetIn = true;
  }

  register$(body: {}): Observable<IUser> {
    return this.http.post<IUser>(environment.apiUrl + '/register', body, {
      withCredentials: true,
    });
  }

  logout(): void {
    this.loggetIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggetIn;
  }
}
