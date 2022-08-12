import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() post!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
