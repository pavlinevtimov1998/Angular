import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITheme } from '../interfaces';

@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) {}

  getThemes$(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(environment.apiUrl + '/themes');
  }

  getThemeById$(themeId: string): Observable<ITheme> {
    return this.http.get<ITheme>(environment.apiUrl + `/themes/${themeId}`);
  }

  createTheme$(body: {}): Observable<ITheme> {
    return this.http.post<ITheme>(environment.apiUrl + '/themes', body, {
      withCredentials: true,
    });
  }

  subscribe$(themeId: string): Observable<ITheme> {
    return this.http.put<ITheme>(
      `${environment.apiUrl}/themes/${themeId}`,
      {},
      { withCredentials: true }
    );
  }
}
