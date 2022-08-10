import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  posts!: IPost[];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((postsArray) => {
      this.posts = postsArray;
    });
  }
}
