import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [AsideComponent, PostListComponent],
  imports: [CommonModule],
  exports: [AsideComponent]
})
export class PostsModule {}
