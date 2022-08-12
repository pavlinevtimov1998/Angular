import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [PostService, ThemeService, UserService],
})
export class ServicesModule {}
