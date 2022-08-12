import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './theme/theme.module';
import { PostsModule } from './posts/posts.module';
import { AsideComponent } from './posts/aside/aside.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [PostsModule, ThemeModule],
})
export class FuturesModule {}
