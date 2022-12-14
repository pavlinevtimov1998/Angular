import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  posts!: IPost[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((postsArray) => {
      this.posts = postsArray;
    });
  }
}
