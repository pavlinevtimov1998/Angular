import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../interfaces';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.apiUrl + '/posts?limit=5');
  }

  like$(postId: string): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      environment.apiUrl + `/likes/${postId}`,
      {},
      { withCredentials: true }
    );
  }

  dislike$(postId: string): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      environment.apiUrl + `/dislikes/${postId}`,
      {},
      { withCredentials: true }
    );
  }
}
